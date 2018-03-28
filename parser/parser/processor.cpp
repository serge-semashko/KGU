#include "processor.h"

void PacketProcessor::AddPacket(const Packet &packet)
{
	// if (!should_ignore(packet))
	packets.push_back(packet);
}

void map_insert_packet(OneWayMap &m, const Packet &p, PacketProcessor::PrintMode mode)
{
	switch (mode) {
		case PacketProcessor::PRINT_ETH_SRC:
			if (!p.eth) return;
			m[p.eth->src].count++;
			m[p.eth->src].m[p.eth->dst].push_back(&p);
			break;
		case PacketProcessor::PRINT_ETH_DST:
			if (!p.eth) return;
			m[p.eth->dst].count++;
			m[p.eth->dst].m[p.eth->src].push_back(&p);
			break;
		case PacketProcessor::PRINT_IP_SRC:
			if (!p.ip) return;
			m[p.ip->src].count++;
			m[p.ip->src].m[p.ip->dst].push_back(&p);
			break;
		case PacketProcessor::PRINT_IP_DST:
			if (!p.ip) return;
			m[p.ip->dst].count++;
			m[p.ip->dst].m[p.ip->src].push_back(&p);
			break;
		default:
			assert(!"Invalid PrintMode");
	}
}

void map_insert_packet(PacketListMap &m, const Packet &p, PacketProcessor::PrintMode mode)
{
	switch(mode) {
		case PacketProcessor::PRINT_ETH_LINKS:
			if (!p.eth) return;
			m[std::min(p.eth->src + " and " + p.eth->dst,
				       p.eth->dst + " and " + p.eth->src)].push_back(&p);
			break;
		case PacketProcessor::PRINT_IP_LINKS:
			if (!p.ip) return;
			m[std::min(p.ip->src + " and " + p.ip->dst,
				       p.ip->dst + " and " + p.ip->src)].push_back(&p);
			break;
		default:
			assert(!"Invalid PrintMode");
	}
}

bool AddressCount_comp_desc(const AddressCount &i, const AddressCount &j)
{
	return i.second > j.second;
}

template <typename Tmap>
void order_addresses(std::vector< AddressCount > &v, Tmap &m)
{
	if (!v.empty()) v.clear();
	for (auto iter = m.begin(); iter != m.end(); ++iter)
		v.push_back(std::make_pair(iter->first, iter->second.size()));
	std::sort(v.begin(), v.end(), AddressCount_comp_desc);
}

void PacketProcessor::PrintOneWay(PrintMode mode, std::ostream &out, bool print_packets) const
{
	OneWayMap map;

	for (auto iter = packets.begin(); iter != packets.end(); ++iter)
		if (filter.Allowed(*iter)) {
			map_insert_packet(map, *iter, mode);
		}

	std::vector< AddressCount > cnt;
	order_addresses(cnt, map);

	printer.SetIndent(4);
	for (unsigned src_i = 0; src_i < cnt.size(); src_i++) {
		const std::string &cur_src = cnt[src_i].first;
		const PacketListMap &dst_map = map[cur_src].m;

		out << cur_src << (mode == PRINT_ETH_SRC || mode == PRINT_IP_SRC ? " sent " : " received ") << cnt[src_i].second << " packets" << "\n\n";

		std::vector< AddressCount > dst_cnt;
		order_addresses(dst_cnt, dst_map);

		for (unsigned dst_i = 0; dst_i < dst_cnt.size(); dst_i++) {
			out << "  " << dst_cnt[dst_i].second << " packet" << (dst_cnt[dst_i].second > 1 ? "s" : "") << " sent ";
			out << (mode == PRINT_ETH_SRC || mode == PRINT_IP_SRC ? "to " : "from ");
			out << dst_cnt[dst_i].first << "\n";
			if (print_packets) {
				out << "\n";
				printer.PrintList(dst_map.at(dst_cnt[dst_i].first));
			}
		}
		out << "\n";
	}
}

void PacketProcessor::PrintLinks(PrintMode mode, std::ostream &out, bool print_packets) const
{
	PacketListMap map;
	for (auto iter = packets.begin(); iter != packets.end(); ++iter)
		if (filter.Allowed(*iter))
			map_insert_packet(map, *iter, mode);

	std::vector< AddressCount > cnt;
	order_addresses(cnt, map);

	printer.SetIndent(4);
	for (auto iter = cnt.begin(); iter != cnt.end(); ++iter) {
		out << iter->second << " packets sent between " << iter->first << "\n";
		if (print_packets) {
			out << "\n";
			printer.PrintList(map[iter->first]);
		}
	}
}

void PacketProcessor::Print(PrintMode mode, std::ostream &out, bool print_packets) const
{
	assert(mode >= 0 && mode <= PRINT_IP_LINKS);
	printer.SetStream(out);
	if (mode == PRINT_ETH_LINKS || mode == PRINT_IP_LINKS)
		PrintLinks(mode, out, print_packets);
	else
		PrintOneWay(mode, out, print_packets);
}

void PacketProcessor::PrintStatsRPC(std::ostream &out) const
{
	std::vector< const Packet* > v;
	for (auto iter = packets.cbegin(); iter != packets.cend(); ++iter)
		if (filter.Allowed(*iter) && iter->rpc) {
			v.push_back(&(*iter));
		}
	static const float NOT_SET = -1;
	float min_delay = NOT_SET;
	float avg_delay = 0;
	float max_delay = NOT_SET;
	std::unordered_multimap< std::string, float > ids; // id, time
	for (auto iter = v.cbegin(); iter != v.cend(); ++iter) {
		if ((*iter)->rpc->mtype == RPCPacket::CALL) {
			ids.insert(std::make_pair((*iter)->rpc->xid, (*iter)->time));
		} else { // reply
			auto call = ids.find((*iter)->rpc->xid);

			if (call == ids.end()) continue;
			float delay = (*iter)->time - call->second;
			if (min_delay == NOT_SET || delay < min_delay)
				min_delay = delay;
			if (max_delay == NOT_SET || delay > max_delay)
				max_delay = delay;
			avg_delay += delay;

			ids.erase(call);
		}
	}
	avg_delay /= 1.0 * v.size();
	out << "Minimal delay: " << min_delay << std::endl;
	out << "Maximal delay: " << max_delay << std::endl;
	out << "Average delay: " << avg_delay << std::endl;
}