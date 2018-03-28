#include "file_reader.h"

void Reader::AttachStream(std::istream *stream)
{
	is = stream;
	current_line = 0;
	current_pos = 0;
}

void Reader::DetachStream()
{
	is = NULL;
}

bool Reader::ProcessLine(const std::string &line, PacketProcessor &processor)
{
	Packet packet;
	int t = parser.ExtractPacket(line, packet, current_line);
	if (t == LineParser::PARSER_FAILURE) {
		return false;
		//throw(LineParser::PARSER_FAILURE);
	}
	assert(t == LineParser::PARSER_OK);
	processor.AddPacket(packet);
	current_line++;
	return true;
}

bool Reader::Read(PacketProcessor &processor)
{
	std::string line;
	bool res = true;
	while (getline(*is, line)) {
		if (!ProcessLine(line, processor)) return false;
		line.clear();
		//current_pos = is->tellg();
	}
	return res;
}

// if ReadTimeSegment is called, format is guaranteed to contain frame.time_relative field

bool Reader::ReadTimeSegment(const float start_time, const float end_time, PacketProcessor &processor)
{
	assert(is);
	Packet packet;
	std::string line;
	bool any_lines_read = false;
	int t;

	is->seekg(current_pos, is->beg);

	while (getline(*is, line)) {
		any_lines_read = true;
		t = parser.ExtractPacket(line, packet, current_line);
		if (t == LineParser::PARSER_FAILURE)
			throw("parser failure");
		assert(t == LineParser::PARSER_OK);
		if (packet.time < start_time || packet.time > end_time) {
			is->seekg(current_pos);
			return true; // packet too fresh
		}
		processor.AddPacket(packet);	
		packet.Clear();
		line.clear();
		current_pos = is->tellg();
		current_line++;
	}

	return any_lines_read;
}

bool Reader::ReadTimeSegment(const float duration, PacketProcessor &processor)
{
	assert(is);
	Packet packet;
	std::string line;

	is->seekg(current_pos, is->beg);

	if (!getline(*is, line)) return false;

	int t = parser.ExtractPacket(line, packet, current_line);
	if (t == LineParser::PARSER_FAILURE)
		throw("parser failure");
	assert(t == LineParser::PARSER_OK);
	processor.AddPacket(packet);
	//packet.Clear();

	current_pos = is->tellg();
	current_line++;

	ReadTimeSegment(packet.time, packet.time + duration, processor);

	return true;
}