//c:\Program Files\Wireshark\tshark -T fields -eframe.protocols -e eth.src -e eth.dst -e ip.src -e ip.dst -e tcp.srcport -e tcp.dstport -e udp.srcport -e udp.dstport -e arp.opcode -e arp.src.hw_mac -e arp.src.proto_ipv4 -e arp.dst.hw_mac -e arp.dst.proto_ipv4
//parse.exe -i cap02.txt -protocols arp ip eth tcp udp -e frame.protocols eth.src eth.dst ip.src ip.dst tcp.srcport tcp.dstport udp.srcport udp.dstport arp.opcode arp.src.hw_mac arp.src.proto_ipv4 arp.dst.hw_mac arp.dst.proto_ipv4 -print-all

#include "includes.h"

#include "arguments.h"
#include "file_reader.h"
#include "memory_reader.h"
#include "line_parser.h"

const char * const DEFAULT_OUTPUT_SRC   = "src.txt";
const char * const DEFAULT_OUTPUT_DST   = "dst.txt";
const char * const DEFAULT_OUTPUT_LINKS = "links.txt";
const char * const DEFAULT_OUTPUT_DELAY = "delay.txt";

std::unique_ptr< Reader > make_reader(const Options& opt)
{
    if (opt.read_from_file) 
    {
        FileReader *res = new FileReader();
        if (!res->OpenFile(opt.input_file)) {
            delete res;
            return NULL;
        }
        return std::unique_ptr< Reader >(res);
    } 
    else // read_from_shared_mem 
    {
        if (!opt.shmem_key_set) {
            std::cout << "Reading key from stdin.\n";
            if (!std::cin >> opt.shmem_key) {
                std::cout << "Invalid key received.\n";
                return NULL;
            }
        }
        MemoryReader *res = new MemoryReader();
        if (!res->AttachMemory(opt.shmem_key)) {
            delete res;
            return NULL;
        }
        return std::unique_ptr< Reader >(res);
    }
}

bool use_ip(const std::string &protocol) {
    return (protocol == "ip" || protocol == "tcp" || protocol == "udp");
}

bool prepare_output(std::ofstream &stream, const std::string &file)
{
    if (stream.is_open()) stream.close();
    stream.open(file, std::ofstream::out | std::ofstream::app);
    if (!stream) std::cout << "Failed to open " << file << " for writing.\n";

    time_t cur_time;
    time(&cur_time);
    stream << "\n\n" << ctime(&cur_time) << "\n\n";

    return stream;
}

inline bool prepare_output(std::ofstream &src,   const std::string &src_file,
                           std::ofstream &dst,   const std::string &dst_file,
                           std::ofstream &links, const std::string &links_file)
{
    return (prepare_output(src, src_file) &&
            prepare_output(dst, dst_file) &&
            prepare_output(links, links_file));   
}


inline bool prepare_output(std::ofstream &src, std::ofstream &dst, std::ofstream &links, const Options &opt)
{
    return prepare_output(src, opt.src_file, dst, opt.dst_file, links, opt.links_file);
}

std::string insert_string(const std::string& filename, const std::string& ins)
{
    size_t found = filename.find('.');
    if (found == std::string::npos) {
        return filename + ins;
    } else {
        std::string res(filename);
        res.insert(found, ins);
        return res;
    }
}

void init_processor(PacketProcessor &processor, const Options &opt)
{
    for (unsigned i = 0; i < opt.forbidden_protocols.size(); i++)
        processor.filter.ForbidProtocol(opt.forbidden_protocols[i]);
    for (unsigned i = 0; i < opt.required_ports.size(); i++)
        processor.filter.RequirePort(opt.required_ports[i]);
    for (unsigned i = 0; i < opt.forbidden_ports.size(); i++)
        processor.filter.ForbidPort(opt.forbidden_ports[i]);
}

enum StatType {STAT_SRC, STAT_DST, STAT_LINKS};

void print_protocol_stats(const PacketProcessor &processor, const std::string &protocol, StatType type, std::ostream &out, bool print_packets)
{
    out << "======================================\n";
    out << "Printing statistics for " << protocol << " protocol\n";
    out << "======================================\n\n";
    if (use_ip(protocol)) {
        switch (type) {
            case STAT_SRC:
                processor.Print(PacketProcessor::PRINT_IP_SRC, out, print_packets);
                break;
            case STAT_DST:
                processor.Print(PacketProcessor::PRINT_IP_DST, out, print_packets);
                break;
            case STAT_LINKS:
                processor.Print(PacketProcessor::PRINT_IP_LINKS, out, print_packets);
                break;
            default:
                assert("Invalid StatType");
        }
    } else {
        switch (type) {
            case STAT_SRC:
                processor.Print(PacketProcessor::PRINT_ETH_SRC, out, print_packets);
                break;
            case STAT_DST:
                processor.Print(PacketProcessor::PRINT_ETH_DST, out, print_packets);
                break;
            case STAT_LINKS:
                processor.Print(PacketProcessor::PRINT_ETH_LINKS, out, print_packets);
                break;
            default:
                assert("Invalid StatType");
        }
    }
}

void print_stats(PacketProcessor &processor, std::ostream &src, std::ostream &dst, std::ostream &links, const Options &opt)
{
    for (unsigned i = 0; i < opt.tracked_protocols.size(); i++) {
        processor.filter.RequireProtocol(opt.tracked_protocols[i]);
        std::cout << "Printing statistics for " << opt.tracked_protocols[i] << " protocol\n";
        print_protocol_stats(processor, opt.tracked_protocols[i], STAT_SRC, src, opt.print_packets);
        print_protocol_stats(processor, opt.tracked_protocols[i], STAT_DST, dst, opt.print_packets);
        print_protocol_stats(processor, opt.tracked_protocols[i], STAT_LINKS, links, opt.print_packets);
        processor.filter.ResetRequiredProtocols();
    }
}

void print_delay_stats(PacketProcessor &processor, std::ostream &out, const Options &opt)
{
    if (opt.delay_protocols.empty()) {
        std::cout << "Gathering delay statistics\n";
        out << "=======================================\n";
        out << "Printing statistics for rpc packets\n";
        out << "=======================================\n\n";
        processor.PrintStatsRPC(out);
    } else {
        for (unsigned i = 0; i < opt.delay_protocols.size(); i++) {
            processor.filter.RequireProtocol(opt.delay_protocols[i]);
            std::cout << "Gathering delay statistics for " << opt.delay_protocols[i] << " protocol\n";
            processor.PrintStatsRPC(out);
            processor.filter.ResetRequiredProtocols();
        }
    }
}

int main(int argc, char *argv[])
{
    Options opt;
    opt.src_file = DEFAULT_OUTPUT_SRC;
    opt.dst_file = DEFAULT_OUTPUT_DST;
    opt.links_file = DEFAULT_OUTPUT_LINKS;
    opt.delay_file = DEFAULT_OUTPUT_DELAY;
    if (!read_arguments(argc, argv, opt)) return 0;

    PacketProcessor processor;
    init_processor(processor, opt);

    std::unique_ptr< Reader > reader(make_reader(opt));
    if (!reader) return 0;
    
    reader->SetFormat(opt.format, "ignore");

    if (!opt.time_step_set) 
    { // reading whole file at once
        std::ofstream src, dst, links, delay;
        if (!prepare_output(src, dst, links, opt)) 
            return 0;
      	if (!reader->Read(processor))
            return 0;
        std::cout << processor.GetPacketCount() << " packets read from input file.\n";
        print_stats(processor, src, dst, links, opt);
        if (opt.print_delay && prepare_output(delay, opt.delay_file)) {
            print_delay_stats(processor, delay, opt);
        }
        processor.ClearPackets();
    } 
    else 
    { // reading by segments
        std::ofstream src, dst, links, delay;
        std::stringstream ss;
        while (reader->ReadTimeSegment(opt.time_step, processor)) {
            ss << (int) processor.FirstPacket().time;
            ss << "_";
            ss << (int) processor.LastPacket().time;
            if (prepare_output(src, insert_string(opt.src_file, ss.str()),
                               dst, insert_string(opt.dst_file, ss.str()),
                               links, insert_string(opt.links_file, ss.str()))) {
                print_stats(processor, src, dst, links, opt);
            }
            if (opt.print_delay && prepare_output(delay, insert_string(opt.delay_file, ss.str()))) {
                print_delay_stats(processor, delay, opt);
            }
            processor.ClearPackets();
            ss.str("");
        }
    }

  	return 0;
}