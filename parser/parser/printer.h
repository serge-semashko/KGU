#pragma once

#include "includes.h"
#include "packet.h"

class PacketPrinter
{
	const int MAX_INDENT = 5;
	int indent;

	std::ostream *out;
public:
	void SetIndent(int indent);
	void PrintPacket(const Packet &p);
	void PrintPacket(const Packet *p) { PrintPacket(*p); }
	void PrintList(const std::list< const Packet* > &l);
	void PrintList(const std::list< Packet >  &l);

	void SetStream(std::ostream &stream) { out = &stream; }
};
