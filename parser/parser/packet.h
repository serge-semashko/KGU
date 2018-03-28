#pragma once

#include "includes.h"

namespace PacketData {
	enum {SET_ERROR, SET_OK, SET_UNKNOWN};
}

// eth.src eth.dst 
struct EthernetPacket
{
	std::string src;
	std::string dst;

	int SetData(const std::string &data, const std::string &id);

	EthernetPacket() { };
	EthernetPacket(const char *src, const char *dst) : src(src), dst(dst) { };
};

// ip.src ip.dst 
struct IPPacket
{
	std::string src;
	std::string dst;

	int SetData(const std::string &data, const std::string &id);

	IPPacket() { };
	IPPacket(const char *src, const char *dst) : src(src), dst(dst) { };
};

// tcp.srcport tcp.dstport 
struct TCPPacket
{
	int srcport;
	int dstport;

	int SetData(const std::string &data, const std::string &id);

	TCPPacket() { };
	TCPPacket(int srcport, int dstport) : srcport(srcport), dstport(dstport) { };
};

// udp.srcport udp.dstport
struct UDPPacket
{
	int srcport;
	int dstport;

	int SetData(const std::string &data, const std::string &id);

	UDPPacket() { };
	UDPPacket(int srcport, int dstport) : srcport(srcport), dstport(dstport) { };	
};

// arp.opcode arp.src.hw_mac arp.src.proto_ipv4 arp.dst.hw_mac arp.dst.proto_ipv4
struct ARPPacket
{
	enum {OPCODE_REQUEST = 1, OPCODE_REPLY = 2};
	int opcode;
	std::string src_mac;
	std::string src_ip;
	std::string dst_mac;
	std::string dst_ip;

	int SetData(const std::string &data, const std::string &id);

	ARPPacket() { };
	ARPPacket(int opcode) : opcode(opcode) { };
};

struct RPCPacket
{
	enum msg_type {
		CALL = 0,
		REPLY = 1
	};
	std::string xid;
	unsigned int mtype;

	int SetData(const std::string &data, const std::string &id);

	RPCPacket() { };
};

struct Packet
{
	// frame.protocols 
	std::string protocols; 
	float time;
	bool time_is_set;

	EthernetPacket *eth;
	IPPacket *ip;
	TCPPacket *tcp;
	UDPPacket *udp;
	ARPPacket *arp;
	RPCPacket *rpc;

	std::unordered_map< std::string, std::string > other_data;

	int SetFrameData(const std::string &data, const std::string &id);
	bool SetData(const std::string &data, const std::string &id);

	int GetSrcPort() const;
	int GetDstPort() const;

	void Clear();

	Packet();
	Packet(const Packet&);
	Packet& operator= (const Packet&);
	Packet(char *protocols) : protocols(protocols), time_is_set(false), 
	                          eth(NULL), ip(NULL), tcp(NULL), udp(NULL), arp(NULL), rpc(NULL) { };
	virtual ~Packet();
};
