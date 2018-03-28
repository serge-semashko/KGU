#pragma once

#include "filter.h"
#include "packet.h"
#include "printer.h"

typedef std::pair< std::string, int > AddressCount;

typedef std::unordered_map< std::string, std::list< const Packet* > > PacketListMap;
struct Connection {
	int count;
	PacketListMap m;
	int size() { return count; }
};
typedef std::unordered_map< std::string, Connection > OneWayMap;

class PacketProcessor
{
public:
	enum PrintMode {PRINT_ETH_SRC, PRINT_ETH_DST, PRINT_IP_SRC, PRINT_IP_DST, PRINT_ETH_LINKS, PRINT_IP_LINKS};
private:
	mutable PacketPrinter printer;

	std::list< Packet > packets;

	void PrintOneWay(PrintMode mode, std::ostream &out, bool print_packets) const;
	void PrintLinks(PrintMode mode, std::ostream &out, bool print_packets) const;
public:

	PacketFilter filter;

	void AddPacket(const Packet &packet);
	void ClearPackets() { packets.clear(); }

	unsigned GetPacketCount()   const { return packets.size();  }
	const Packet& FirstPacket() const { return packets.front(); }
	const Packet& LastPacket()  const { return packets.back();  }

	void Print(PrintMode mode, std::ostream &out, bool print_packets) const;
	void PrintStatsRPC(std::ostream &out) const;
};
