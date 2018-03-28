#include "line_parser.h"

LineParser::LineParser()  { }

LineParser::~LineParser() { }

void LineParser::SetFormat(const std::vector< std::string > &format, const std::string &ignore)
{
	this->format.assign(format.begin(), format.end());
	FORMAT_IGNORE = ignore;
}

void LineParser::SetAllowedProtocols(std::vector<std::string> protocols)
{
	this->protocols = protocols;
}

void LineParser::AddAllowedProtocol(const std::string &name)
{
	for (unsigned i = 0; i < protocols.size(); i++)
		if (protocols[i] == name) return;
	protocols.push_back(std::string(name));
}

bool LineParser::IsAllowed(const std::string &protocol)
{
	for (unsigned i = 0; i < protocols.size(); i++)
		if (protocols[i] == protocol) return true;
	return false;
}

int LineParser::ExtractPacket(const std::string &line, Packet &packet, int line_number) const
{
	std::istringstream ss(line + "\t");
	std::string token;
	for (unsigned i = 0; i < format.size(); i++) {
		getline(ss, token, '\t');
		if (format[i] == FORMAT_IGNORE) {
			token.clear();
			continue;
		}
		if (ss.fail()) {
			std::cout << "Error on line " << line_number << ": cannot read field #" << i + 1 << " (" << format[i] << ")\n";
			return PARSER_FAILURE;
		}

		// std::ofstream out("test.out", std::ofstream::app);
		// out << i << ")" << format[i] << ": '" << token << "'\n";
		// out << "\\r == " << (token.back() == '\r') << " \\n == " << (token.back() == '\n') << "\n";
		// out.close();

		if (token.back() == '\r' || token.back() == '\n') 
		 	token.pop_back();

		if (!token.empty() && token != "\r") {
			if (!packet.SetData(token, format[i])) {
				std::cout << "Error on line " << line_number << " reading field " << format[i] << " (" << token << ")\n";
				return PARSER_FAILURE;
			}
		}
		token.clear();
	}
	return PARSER_OK;
}
