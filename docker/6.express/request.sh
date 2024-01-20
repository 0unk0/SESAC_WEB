#!/bin/bash
# curl localhost:8000 --silent | grep background

while true;
do  
    curl localhost:8000 --silent | grep background
done