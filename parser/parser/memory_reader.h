#pragma once

#include "includes.h"
#include "reader.h"


struct MemoryBuf: public std::streambuf
{
	MemoryBuf(char *s, std::size_t len) {
		setg(s, s, s + len);
	}
};


class MemoryReader: public Reader
{
	std::shared_ptr< MemoryBuf > buf;
	std::shared_ptr< std::istream > is;
	using Reader::AttachStream;
	using Reader::DetachStream;

	char *mem_ptr;
	bool mem_attached;

public:
	MemoryReader();
	~MemoryReader();
	bool AttachMemory(key_t key);
	void DetachMemory();
};
