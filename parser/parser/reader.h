#pragma once

#include "includes.h"
#include "line_parser.h"
#include "packet.h"
#include "processor.h"
#include "printer.h"

namespace Read {
	enum {READ_OK, READ_ERROR};
}

class Reader
{
	std::istream *is;
	LineParser parser;
	int current_line;
	int current_pos;

	bool ProcessLine(const std::string &line, PacketProcessor &processor);

public:
	Reader() : is(NULL) { }
	virtual ~Reader() { }

	void SetFormat(const std::vector< std::string > &format, const std::string &ignore);

	void AttachStream(std::istream &stream);
	void AttachStream(std::istream *stream);
	void DetachStream();

	virtual bool Read(PacketProcessor &processor);
	virtual bool ReadTimeSegment(const float start, const float end, PacketProcessor &processor);
	virtual bool ReadTimeSegment(const float seconds, PacketProcessor &processor);
};

inline void Reader::AttachStream(std::istream &stream)
{
	AttachStream(&stream);
}

inline void Reader::SetFormat(const std::vector< std::string > &format, const std::string &ignore)
{
	parser.SetFormat(format, ignore);
}
