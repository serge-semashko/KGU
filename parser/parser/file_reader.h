#pragma once

#include "includes.h"
#include "processor.h"
#include "reader.h"

class FileReader : public Reader
{
	std::ifstream ifs;

	using Reader::AttachStream;
	using Reader::DetachStream;

public:
	bool ReadFile(const std::string &filename, PacketProcessor &processor);

	bool OpenFile(const std::string &filename);
	void CloseFile();

	bool ReadTimeSegment(const float start, const float end, PacketProcessor &processor);
	bool ReadTimeSegment(const float seconds, PacketProcessor &processor);
};

inline bool FileReader::ReadTimeSegment(const float start_time, const float end_time, PacketProcessor &processor)
{
	if (!ifs.is_open()) return false;
	return Reader::ReadTimeSegment(start_time, end_time, processor);
}

inline bool FileReader::ReadTimeSegment(const float duration, PacketProcessor &processor)
{
	if (!ifs.is_open()) return false;
	return Reader::ReadTimeSegment(duration, processor);
}
