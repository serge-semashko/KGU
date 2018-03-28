#include "printer.h"

void PacketPrinter::SetIndent(int indent)
{
	assert(indent <= MAX_INDENT && indent >= 0);
	this->indent = indent;
}

void PacketPrinter::PrintPacket(const Packet &p)
{
	char prefix[indent + 1];
	memset(prefix, ' ', indent * sizeof(char));
	prefix[indent] = '\0';
	if (p.time_is_set) {
		*out << prefix << "time = " << p.time << "\n";
	}
	*out << prefix << "protocols = " << p.protocols << "\n";
	if (p.eth) {
		*out << prefix;
		*out << "eth: src = " << p.eth->src << " dst = " << p.eth->dst << "\n";
	}
	if (p.ip) {
		*out << prefix;
		*out << "ip:  src = " << p.ip->src << " dst = " << p.ip->dst << "\n";
	}
	if (p.tcp) {
		*out << prefix;
		*out << "tcp: srcport = " << p.tcp->srcport << " dstport = " << p.tcp->dstport << "\n";
	}
	if (p.udp) {
		*out << prefix;
		*out << "udp: srcport = " << p.udp->srcport << " dstport = " << p.udp->dstport << "\n";
	}
	if (p.arp) {
		*out << prefix;
		*out << "arp";
		if (p.arp->opcode == 1) {
			*out << " request: who has " << p.arp->dst_ip << "? tell " << p.arp->src_ip << " (" << p.arp->src_mac << ")\n";
		} else if (p.arp->opcode == 2) {
			*out << " reply: from " << p.arp->src_ip << " (" << p.arp->src_mac << ")" << " to " << p.arp->dst_ip << " (" << p.arp->dst_mac << ")\n";
		} else {
			*out << ": opcode = " << p.arp->opcode;
			*out << " src_ip = " << p.arp->src_ip << " (src_mac = " << p.arp->src_mac << ")";
			*out << " dst_ip = " << p.arp->dst_ip << " (dst_mac = " << p.arp->dst_mac << ")\n";
		}
	}
	if (p.rpc) {
		*out << prefix;
		*out << "rpc";
		if (p.rpc->mtype == RPCPacket::CALL) {
			*out << " call:";
		} else if (p.rpc->mtype == RPCPacket::REPLY) {
			*out << " reply:";
		} else {
			*out <<": mtype = " << p.rpc->mtype;
		}
		*out << " xid = " << p.rpc->xid << "\n";
	}

	for (auto iter = p.other_data.begin(); iter != p.other_data.end(); ++iter) {
		*out << prefix << iter->first << ": " << iter->second << "\n";
	}

	*out << "\n";
}

void PacketPrinter::PrintList(const std::list< const Packet* > &l)
{
	for (auto iter = l.cbegin(); iter != l.cend(); ++iter)
		PrintPacket(*iter);
}

void PacketPrinter::PrintList(const std::list< Packet > &l)
{
	for (auto iter = l.cbegin(); iter != l.cend(); ++iter)
		PrintPacket(*iter);
}
