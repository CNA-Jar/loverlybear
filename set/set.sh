#!/bin/sh
GREEN='\e[1;32m'
echo -e "${GREEN}wait for install typings ... ${NC}"
typings i
echo -e "${GREEN}wait for install packages ... ${NC}"
cnpm i
echo -e "${GREEN}install success, wait for build ... ${NC}"
webpack-dev-server --inline --quiet --hot --colors --progress --open
