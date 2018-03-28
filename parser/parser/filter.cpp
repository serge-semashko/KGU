#include "filter.h"

bool PacketFilter::Required(const std::string &protocol) const
{
	for (auto iter = required.cbegin(); iter != required.cend(); ++iter)
		if (*iter == protocol) return true;
	return false;
}

bool PacketFilter::Forbidden(const std::string &protocol) const
{
	if (forbidden.empty()) return false;
	for (auto iter = forbidden.cbegin(); iter != forbidden.cend(); ++iter)
		if (*iter == protocol) return true;
	return false;
}

void PacketFilter::RequireProtocol(const std::string &protocol) 
{
	if (!Required(protocol))
		required.push_back(protocol);
}

void PacketFilter::ForbidProtocol(const std::string &protocol)
{
	if (!Forbidden(protocol))
		forbidden.push_back(protocol);
}

void PacketFilter::ResetRequiredProtocols()
{
	required.clear();
}

void PacketFilter::ResetForbiddenProtocols()
{
	forbidden.clear();
}

void PacketFilter::ResetProtocols()
{
	ResetRequiredProtocols();
	ResetForbiddenProtocols();
}

bool PacketFilter::Required(int port) const
{
	for (auto iter = ports_required.cbegin(); iter != ports_required.cend(); ++iter)
		if (*iter == port) return true;
	return false;
}

bool PacketFilter::Forbidden(int port) const
{
	if (ports_forbidden.empty()) return false;
	for (auto iter = ports_forbidden.cbegin(); iter != ports_forbidden.cend(); ++iter)
		if (*iter == port) return true;
	return false;
}

void PacketFilter::RequirePort(int port) 
{
	if (!Required(port))
		ports_required.push_back(port);
}

void PacketFilter::ForbidPort(int port)
{
	if (!Forbidden(port))
		ports_forbidden.push_back(port);
}

void PacketFilter::ResetRequiredPorts()
{
	ports_required.clear();
}

void PacketFilter::ResetForbiddenPorts()
{
	ports_forbidden.clear();
}

void PacketFilter::ResetPorts()
{
	ResetRequiredPorts();
	ResetForbiddenPorts();
}

bool PacketFilter::Allowed(const std::string &protocol) const
{
	return (!Forbidden(protocol) && (Required(protocol) || required.empty()));
}

bool PacketFilter::Allowed(int port) const
{
	return (!Forbidden(port) && (Required(port) || ports_required.empty()));
}

bool PacketFilter::Allowed(const Packet &packet) const
{
	std::string s = ":" + packet.protocols + ":";

	bool f = required.size() == 0;
	for (auto iter = required.cbegin(); iter != required.cend(); ++iter)
		if (s.find(":" + *iter + ":") != std::string::npos) {
			f = true;
			break;
		}
	if (!f) return false;

	for (auto iter = forbidden.cbegin(); iter != forbidden.cend(); ++iter)
		if (s.find(":" + *iter + ":") != std::string::npos) return false;

	for (auto iter = ports_required.begin(); iter != ports_required.end(); ++iter)
		if (packet.GetSrcPort() != *iter && packet.GetDstPort() != *iter) return false;

	for (auto iter = ports_forbidden.begin(); iter != ports_forbidden.end(); ++iter)
		if (packet.GetSrcPort() == *iter || packet.GetDstPort() == *iter) return false;
	
	return true;
}
