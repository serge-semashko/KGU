#include "arguments.h"

const char * const ARG_OUTPUT_FILE = "-o";
const char * const ARG_INPUT_FILE  = "-i";
const char * const ARG_SHARED_MEM = "-shmem";
const char * const ARG_FORMAT = "-format";
const char * const ARG_TRACKED_PROTOCOLS  = "-protocols";
const char * const ARG_FORBIDDEN_PROTOCOLS = "-ignore";
const char * const ARG_REQUIRED_PORTS  = "-ports";
const char * const ARG_FORBIDDEN_PORTS = "-ports-ignore";
const char * const ARG_PRINT_PACKETS = "-print-all";
const char * const ARG_TIME_STEP = "-time";
const char * const ARG_DELAY_STATS = "-delay";

bool read_output(int argc, char *argv[], int &cur, Options &opt)
{
    if (cur >= argc - 1 || argv[cur + 1][0] == '-') {
        std::cerr << "No parameters specified for " << ARG_OUTPUT_FILE << "\n";
        return false;
    }
    cur++;
    if (cur >= argc - 1 || argv[cur + 1][0] == '-') { 
        std::cerr << ARG_OUTPUT_FILE << " expects 3 or 4 parameters.\n";
        return false;
    }
    if (cur >= argc - 2 || argv[cur + 2][0] == '-') {
        std::cerr << ARG_OUTPUT_FILE << " expects 3 or 4 parameters.\n";
        return false;
    }
    opt.src_file = argv[cur];
    opt.dst_file = argv[cur + 1]; 
    opt.links_file = argv[cur + 2];

    if (opt.src_file == opt.dst_file || opt.src_file == opt.links_file || opt.dst_file == opt.links_file) {
        std::cerr << "Error: output file names must be unique.\n";
        return false;
    }

    cur += 3;

    if (cur <= argc - 1 && argv[cur][0] != '-') {
        opt.delay_file = argv[cur];
        if (opt.src_file == opt.delay_file || opt.dst_file == opt.delay_file || opt.links_file == opt.delay_file) {
            std::cerr << "Error: output file names must be unique.\n";
            return false;       
        }
        cur++;
    }

    return true;
}

bool read_input(int argc, char *argv[], int &cur, Options &opt)
{
    opt.read_from_file = true;
    if (cur >= argc - 1 || argv[cur + 1][0] == '-') {
        std::cerr << "No parameters specified for " << ARG_INPUT_FILE << "\n";
        return false;
    }
    opt.input_file = argv[cur + 1];
    cur += 2;
    return true;
}

bool read_shared_mem(int argc, char *argv[], int &cur, Options &opt)
{
    opt.read_from_shared_mem = true;
    if (cur >= argc - 1 || argv[cur + 1][0] == '-')
        return true;
    cur++;
    if (sscanf(argv[cur], "%d", &opt.shmem_key) != 1) {
        std::cerr << "Error: \"" << argv[cur];
        std::cerr << "\" is not a valid key.\n";
        return false;
    }
    opt.shmem_key_set = true;
    cur++;
    return true;
}

bool read_format(int argc, char *argv[], int &cur, Options &opt)
{
    if (cur >= argc - 1 || argv[cur + 1][0] == '-') {
        std::cerr << "No parameters specified for " << ARG_FORMAT << "\n";
        return false;
    }
    cur++;

    if (!opt.format.empty()) {
        std::cerr << "Error: multiple format files specified.\n";
        return false;
    }
    
    std::ifstream ifs(argv[cur]);
    if (ifs.fail()) {
        std::cerr << "Failed to open file " << argv[cur] << "\n";
        return false;
    }

    std::string s;
    while (getline(ifs, s)) {
        if (s.size() > 0 && s.back() == '\r') 
            s.pop_back();
        if (s.size() > 0) opt.format.push_back(s);
        s.clear();
    }

    if (opt.format.size() == 0) {
        std::cerr << "Error: empty format file " << argv[cur] << "\n";
        return false;
    }

    cur++;
    return true;
}

bool read_protocols(int argc, char *argv[], int &cur, Options &opt)
{
    bool track = (strcmp(argv[cur], ARG_TRACKED_PROTOCOLS) == 0);
    if (cur >= argc - 1 || argv[cur + 1][0] == '-') {
        std::cerr << "No parameters specified for " << (track? ARG_TRACKED_PROTOCOLS : ARG_FORBIDDEN_PROTOCOLS) << "\n";
        return false;
    }
    cur++;
    std::vector< std::string > &ref = (track ? opt.tracked_protocols : opt.forbidden_protocols);
    while (cur < argc && argv[cur][0] != '-')
        ref.push_back(argv[cur++]);
    return true;
}

bool read_ports(int argc, char *argv[], int &cur, Options &opt)
{
    bool require = strcmp(argv[cur], ARG_REQUIRED_PORTS) == 0;
    if (cur >= argc - 1 || argv[cur + 1][0] == '-') {
        std::cerr << "No parameters specified for " << (require? ARG_REQUIRED_PORTS : ARG_FORBIDDEN_PORTS) << "\n";
        return false;
    }
    cur++;
    std::vector< int > &ref = (require ? opt.required_ports : opt.forbidden_ports);
    while (cur < argc && argv[cur][0] != '-') {
        int t;
        if (sscanf(argv[cur], "%d", &t) != 1) {
            std::cerr << "Error: \"" << argv[cur];
            std::cerr << "\" is not a valid port number.\n";
            return false;
        }
        ref.push_back(t);
        if (require && opt.required_ports.size() > 2) {
            std::cerr << "More than two ports specified for " << ARG_REQUIRED_PORTS << "\n";
            return false;
        }
        cur++;
    }
    return true;
}

bool read_time_step(int argc, char *argv[], int &cur, Options &opt)
{
    if (cur >= argc - 1 || argv[cur + 1][0] == '-') {
        std::cerr << "No parameters specified for " << ARG_TIME_STEP << "\n";
        return false;
    }
    cur++;
    if (sscanf(argv[cur], "%d", &opt.time_step) != 1 || opt.time_step <= 0) {
        std::cerr << "Error: \"" << argv[cur];
        std::cerr << "\" is not a valid time step.\n";
        return false;
    }
    opt.time_step_set = true;
    cur++;
    return true;
}

bool read_delay_stats(int argc, char *argv[], int &cur, Options &opt)
{
    opt.print_delay = true;
    cur++;
    while (cur < argc && argv[cur][0] != '-')
        opt.delay_protocols.push_back(argv[cur++]);
    return true;
}

bool read_token(int argc, char *argv[], int &cur, Options &opt)
{
    if (cur >= argc) return false;

    if (strcmp(argv[cur], ARG_OUTPUT_FILE) == 0) {
        return read_output(argc, argv, cur, opt);
    }

    if (strcmp(argv[cur], ARG_INPUT_FILE) == 0) {
        return read_input(argc, argv, cur, opt);
    }

    if (strcmp(argv[cur], ARG_SHARED_MEM) == 0) {
        return read_shared_mem(argc, argv, cur, opt);
    }

    if (strcmp(argv[cur], ARG_FORMAT) == 0) {
        return read_format(argc, argv, cur, opt);
    }

    if (strcmp(argv[cur], ARG_TRACKED_PROTOCOLS) == 0 || strcmp(argv[cur], ARG_FORBIDDEN_PROTOCOLS) == 0) {
        return read_protocols(argc, argv, cur, opt);
    }

    if (strcmp(argv[cur], ARG_REQUIRED_PORTS) == 0 || strcmp(argv[cur], ARG_FORBIDDEN_PORTS) == 0) {
        return read_ports(argc, argv, cur, opt);
    }

    if (strcmp(argv[cur], ARG_PRINT_PACKETS) == 0) {
        opt.print_packets = true;
        cur++;
        return true;
    }

    if (strcmp(argv[cur], ARG_TIME_STEP) == 0) {
        return read_time_step(argc, argv, cur, opt);
    }

    if (strcmp(argv[cur], ARG_DELAY_STATS) == 0) {
        return read_delay_stats(argc, argv, cur, opt);
    }

    std::cerr << "Unknown command: " << argv[cur] << "\n";
    return false;
}

bool verify_options(const Options &opt)
{
    if (opt.read_from_file && opt.read_from_shared_mem) {
        std::cerr << "Error: " << ARG_INPUT_FILE << " and " << ARG_SHARED_MEM << " can't be used together.\n";
        return false;
    }

    if (!opt.read_from_file && !opt.read_from_shared_mem) {
        std::cerr << "Error: either " << ARG_INPUT_FILE << " or " << ARG_SHARED_MEM << " must be specified.\n";
        return false;
    }

    if (opt.format.empty()) {
        std::cerr << "Error: format not specified.\n";
        return false;
    }

    if (opt.tracked_protocols.empty()) {
        std::cerr << "Error: no protocols specified.\n";
        return false;
    }

    if (opt.time_step_set) {
        // frame.time_relative field must be present in format
        bool time_found = false;
        for (unsigned i = 0; i < opt.format.size(); ++i)
            if (opt.format[i] == "frame.time_relative") {
                time_found = true;
                break;
            }
        if (!time_found) {
            std::cerr << "Error: format must contain frame.time_relative field if " << ARG_TIME_STEP << " is specified.\n";
            return false;
        }
    }
    return true;
}

bool read_arguments(int argc, char *argv[], Options &opt)
{
    int cur = 1;
    while (cur < argc) {
        if (!read_token(argc, argv, cur, opt))
            return false;
    }

    return verify_options(opt);
}
