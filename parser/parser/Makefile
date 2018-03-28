CC = g++
CFLAGS = -g -static -s -Os -std=c++11 -Wall -Wextra -Wcpp -Wparentheses
#CFLAGS = -s -O3 -static -std=c++11 -Wall -Wextra -Wcpp -Wparentheses -Wno-write-strings
OBJECTS = $(patsubst %.cpp,%.o,$(wildcard *.cpp))
LIBS = -lrt
EXECUTABLE = parse
.PHONY : all run clean

all: $(OBJECTS)
	$(CC) $(CFLAGS) $(OBJECTS) $(LIBS) -o $(EXECUTABLE)

run: all
	./$(EXECUTABLE)
	
rebuild: clean all

%.o: %.cpp %.h
	$(CC) -c $(CFLAGS) $(INCLUDES) $< -o $@

%.o: %.cpp
	$(CC) -c $(CFLAGS) $(INCLUDES) $< -o $@

clean:
	rm -vf *.o
