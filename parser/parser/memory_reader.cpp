#include "memory_reader.h"

MemoryReader::MemoryReader() : is(NULL), mem_attached(false)
{ }

MemoryReader::~MemoryReader()
{
	DetachMemory();
}

bool MemoryReader::AttachMemory(key_t key)
{
	int segment_id = shmget(key, 0, S_IRGRP | S_IROTH);
	if (segment_id == -1) {
		std::cerr << "Error: shared memory segment not found.\n";
		return false;
	}
	char *mem_ptr = (char *) shmat(segment_id, 0, 0);
	if (mem_ptr == (char *) -1) {
		std::cerr << "Error: failed to attach memory.\n";
		return false;
	}
	mem_attached = true;

	// get memory buffer size
	shmid_ds shminfo;
	shmctl(segment_id, IPC_STAT, &shminfo);
	int segment_size = shminfo.shm_segsz;

	buf = std::shared_ptr< MemoryBuf > (new MemoryBuf(mem_ptr, segment_size));
	is = std::shared_ptr< std::istream > (new std::istream(buf.get()));

	AttachStream(is.get());

	return true;
}

void MemoryReader::DetachMemory()
{
	DetachStream();
	if (mem_attached) {
		shmdt(mem_ptr);
		mem_attached = false;
	}
}