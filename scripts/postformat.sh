#!/bin/bash

echo Add timestamp to envs...
NOW=REACT_APP_TIMESTAMP=\"$(date)\"
echo -e "$NOW" > .env
echo 'Post-format is done'
