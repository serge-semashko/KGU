#include "packet.h"

int EthernetPacket::SetData(const std::string &data, const std::string &id)
{
	if (id == "src") {
		src = data;
	} else if (id == "dst") {
		dst = data;
	} else {
		return PacketData::SET_UNKNOWN;
	}
	return PacketData::SET_OK;
}

int IPPacket::SetData(const std::string &data, const std::string &id)
{
	if (id == "src") {
		src = data;
	} else if (id == "dst") {
		dst = data;
	} else {
		return PacketData::SET_UNKNOWN;
	}
	return PacketData::SET_OK;
}

int TCPPacket::SetData(const std::string &data, const std::string &id)
{
	if (id == "srcport") {
		std::istringstream ss(data);
		ss >> srcport;
		if (!ss) return PacketData::SET_ERROR;
	} else if (id == "dstport") {
		std::istringstream ss(data);
		ss >> dstport;
		if (!ss) return PacketData::SET_ERROR;
	} else {
		return PacketData::SET_UNKNOWN;
	}
	return PacketData::SET_OK;
}

int UDPPacket::SetData(const std::string &data, const std::string &id)
{
	if (id == "srcport") {
		std::istringstream ss(data);
		ss >> srcport;
		if (!ss) return PacketData::SET_ERROR;
	} else if (id == "dstport") {
		std::istringstream ss(data);
		ss >> dstport;
		if (!ss) return PacketData::SET_ERROR;
	} else {
		return PacketData::SET_UNKNOWN;
	}
	return PacketData::SET_OK;
}

int ARPPacket::SetData(const std::string &data, const std::string &id)
{
	if (id == "opcode") {
		std::istringstream ss(data);
		ss >> opcode;
		if (!ss) return PacketData::SET_ERROR;
	} else if (id == "src.hw_mac") {
		src_mac = data;
	} else if (id == "src.proto_ipv4") {
		src_ip = data;
	} else if (id == "dst.hw_mac") {
		dst_mac = data;
	} else if (id == "dst.proto_ipv4") {
		dst_ip = data;
	} else {
		return PacketData::SET_UNKNOWN;
	}
	return PacketData::SET_OK;
}

int RPCPacket::SetData(const std::string &data, const std::string &id)
{
	if (id == "xid") {
		xid = data;
		//std::cout << data << " = " << xid << "\n";
	} else if (id == "msgtyp") {
		std::stringstream ss(data);
		ss >> mtype;
		if (!ss) return PacketData::SET_ERROR;
		if (mtype != CALL && mtype != REPLY) return PacketData::SET_ERROR;
	} else {
		return PacketData::SET_UNKNOWN;
	}
	return PacketData::SET_OK;
}

void Packet::Clear() {
	protocols.clear();
	time_is_set = false;
	delete eth;
	eth = NULL;
	delete ip;
	ip = NULL;
	delete tcp;
	tcp = NULL;
	delete udp;
	udp = NULL;
	delete arp;
	arp = NULL;
	delete rpc;
	rpc = NULL;
	other_data.clear();
}

Packet::Packet() : time_is_set(false), eth(NULL), ip(NULL), tcp(NULL), udp(NULL), arp(NULL), rpc(NULL) { }

Packet::Packet(const Packet &other) : eth(NULL), ip(NULL), tcp(NULL), udp(NULL), arp(NULL), rpc(NULL)
{
	protocols = other.protocols;
	time = other.time;
	time_is_set = other.time_is_set;
	if (other.eth)
		eth = new EthernetPacket(*other.eth);
	if (other.ip) 
		ip = new IPPacket(*other.ip);
	if (other.tcp)
		tcp = new TCPPacket(*other.tcp);
	if (other.udp)
		udp = new UDPPacket(*other.udp);
	if (other.arp)
		arp = new ARPPacket(*other.arp);
	if (other.rpc)
		rpc = new RPCPacket(*other.rpc);
	other_data = other.other_data;
}

Packet& Packet::operator= (const Packet& other)
{
	if (this == &other) return *this;
	delete eth;
	delete ip;
	delete tcp;
	delete udp;
	delete arp;
	protocols = other.protocols;
	time = other.time;
	time_is_set = other.time_is_set;
	if (other.eth)
		eth = new EthernetPacket(*other.eth);
	if (other.ip) 
		ip = new IPPacket(*other.ip);
	if (other.tcp)
		tcp = new TCPPacket(*other.tcp);
	if (other.udp)
		udp = new UDPPacket(*other.udp);
	if (other.arp)
		arp = new ARPPacket(*other.arp);
	other_data = other.other_data;
	return *this;
}

Packet::~Packet() 
{
	delete eth;
	delete ip;
	delete tcp;
	delete udp;
	delete arp;
}

int Packet::SetFrameData(const std::string &data, const std::string &id)
{
	if (id == "protocols") {
		protocols = data;
	} else if (id == "time_relative") {
		std::istringstream ss(data);
		ss >> time;
		if (!ss) return PacketData::SET_ERROR;
		time_is_set = true;
	} else {
		return PacketData::SET_UNKNOWN;
	}
	return PacketData::SET_OK;
}

bool Packet::SetData(const std::string &data, const std::string &id)
{
	std::string p1 = id.substr(0, id.find_first_of('.')); // first word
	std::string p2 = id.substr(id.find_first_of('.') + 1); // everything after
	//std::cout << id.substr(id.find_first_of('.') + 1) << " " << data << std::endl;
	int res = PacketData::SET_OK;
	if (p1 == "frame") 
	{
		res = SetFrameData(data, p2);
	}
	else if (p1 == "eth")  
	{
		if (eth == NULL) eth = new EthernetPacket;
		res = eth->SetData(data, p2);
	} 
	else if (p1 == "ip") 
	{
		if (ip == NULL) ip = new IPPacket;
		res = ip->SetData(data, p2);
	} 
	else if (p1 == "tcp") 
	{
		if (tcp == NULL) tcp = new TCPPacket;
		res = tcp->SetData(data, p2);
	} 
	else if (p1 == "udp") 
	{
		if (udp == NULL) udp = new UDPPacket;
		res = udp->SetData(data, p2);
	} 
	else if (p1 == "arp") 
	{
		if (arp == NULL) arp = new ARPPacket;
		res = arp->SetData(data, p2);
	} 
	else if (p1 == "rpc")
	{
		if (rpc == NULL) rpc = new RPCPacket;
		res = rpc->SetData(data, p2);
	}
	else other_data[id] = data;

	if (res == PacketData::SET_UNKNOWN)
		other_data[id] = data;

	return res;
}

int Packet::GetSrcPort() const {
	if (tcp) return tcp->srcport;
	if (udp) return udp->srcport;
	return -1;
}

int Packet::GetDstPort() const {
	if (tcp) return tcp->dstport;
	if (udp) return udp->dstport;
	return -1;
}
