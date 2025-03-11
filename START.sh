#!/bin/bash

# Run server
konsole -p tabtitle="Hugo Server" -e "hugo server --buildDrafts"

# Build after stop
hugo
