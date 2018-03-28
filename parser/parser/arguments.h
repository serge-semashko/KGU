#pragma once

#include "includes.h"

extern const char * const ARG_OUTPUT_FILE;
extern const char * const ARG_INPUT_FILE;
extern const char * const ARG_SHARED_MEM;
extern const char * const ARG_FORMAT;
extern const char * const ARG_TRACKED_PROTOCOLS;
extern const char * const ARG_FORBIDDEN_PROTOCOLS;
extern const char * const ARG_REQUIRED_PORTS;
extern const char * const ARG_FORBIDDEN_PORTS;
extern const char * const ARG_PRINT_PACKETS;
extern const char * const ARG_TIME_STEP;
extern const char * const ARG_DELAY_STATS;

struct Options {
    std::string input_file;
    std::string src_file, dst_file, links_file, delay_file;
    bool read_from_file;
    bool read_from_shared_mem;
    bool shmem_key_set;
    key_t shmem_key;
    std::vector< std::string > format;
    std::vector< std::string > tracked_protocols;
    std::vector< std::string > forbidden_protocols;
    std::vector< int > required_ports;
    std::vector< int > forbidden_ports;
    bool print_packets;
    int time_step;
    bool time_step_set;
    bool print_delay;
    std::vector < std::string > delay_protocols;

    Options() : read_from_file(false),
                read_from_shared_mem(false), 
                shmem_key_set(false),
                print_packets(false),
                time_step_set(false),
                print_delay(false) { }
};

bool read_arguments(int argc, char *argv[], Options &opt);