#pragma once

#include "includes.h"
#include "packet.h"

class LineParser
{
	std::string FORMAT_IGNORE;
	std::vector<std::string> format;

	std::vector<std::string> protocols;
	bool IsAllowed(const std::string &protocol);
public:
	LineParser();
	~LineParser();

	static const int PARSER_FAILURE = -1;
	static const int PARSER_OK      =  0;
	static const int PARSER_IGNORE  =  1;

	void SetFormat(const std::vector< std::string > &format, const std::string &ignore);

	void SetAllowedProtocols(std::vector<std::string> protocols);
	void AddAllowedProtocol(const std::string &name);

	int ExtractPacket(const std::string &line, Packet &packet, int line_number) const;
};
