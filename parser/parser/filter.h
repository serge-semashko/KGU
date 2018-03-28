#pragma once

#include "includes.h"
#include "packet.h"

class PacketFilter
{
private:
	std::list< std::string > required;
	std::list< std::string > forbidden;
	bool Required(const std::string &protocol) const;
	bool Forbidden(const std::string &protocol) const;

	std::list<int> ports_required;
	std::list<int> ports_forbidden;
	bool Required(int port) const;
	bool Forbidden(int port) const;
public:
	void RequireProtocol(const std::string &protocol);
	void ForbidProtocol(const std::string &protocol);
	void ResetRequiredProtocols();
	void ResetForbiddenProtocols();
	void ResetProtocols();

	void RequirePort(int port);
	void ForbidPort(int port);
	void ResetRequiredPorts();
	void ResetForbiddenPorts();
	void ResetPorts();	

	bool Allowed(const std::string &protocol) const;
	bool Allowed(int port) const;
	bool Allowed(const Packet &packet) const;
};
