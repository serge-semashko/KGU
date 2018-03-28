#include "file_reader.h"

bool FileReader::OpenFile(const std::string &filename)
{
	if (ifs.is_open()) ifs.close();

	ifs.open(filename, std::ifstream::in | std::ifstream::binary);
	if (ifs.fail()) {
		std::cout << "Failed to open input file (" << filename << ")\n";
		return false;
	}
	AttachStream(ifs);
	return true;
}

void FileReader::CloseFile()
{
	if (ifs.is_open()) {
		DetachStream();
		ifs.close();
	}
}

bool FileReader::ReadFile(const std::string &filename, PacketProcessor &processor)
{
	if (!OpenFile(filename)) return false;
	bool res = Read(processor);
	CloseFile();
	return res;
}
