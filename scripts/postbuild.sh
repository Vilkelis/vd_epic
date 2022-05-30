#!/bin/bash

cd build || exit
mv -f ./index.html ../../../views/vd_react_dashboard/index.html.erb

STATIC=../../../../assets/views/vd_react_dashboard/static

rm -rf $STATIC
mkdir -p $STATIC
mv -f ./static/* $STATIC/
cd $STATIC && git add -A
