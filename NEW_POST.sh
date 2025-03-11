#!/bin/bash

# Ask the user for the post name


# Create the new post using hugo
konsole -p tabtitle="Hugo Server" -e "read -p "Enter the post name: " post_name ; hugo new content content/posts/$post_name.md"



# Ask the user for the post name
read -p "Enter the post name: " post_name

# Create the new post using hugo
konsole -p tabtitle="Hugo Server" -e "hugo new content content/posts/$post_name.md"
