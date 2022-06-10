#!/bin/bash

cd build || exit
# mv -f ./index.html ../../../views/vd_epic_dashboard/index.html.erb


STATIC_STATICS=../../../../assets/views/vd_epic_dashboard

rm -rf $STATIC_STATICS
mkdir -p $STATIC_STATICS
mv -f ./index.html ../../../views/vd_epic_dashboard/index.html.erb

mv -f ./* $STATIC_STATICS/
cd $STATIC_STATICS && git add -A


# STATIC_ICONS=../../../../assets/views/vd_epic_dashboard/icons

# rm -rf $STATIC_ICONS
# mkdir -p $STATIC_ICONS
# mv -f ./icons/* $STATIC_ICONS/
# cd $STATIC_ICONS && git add -A

# STATIC_FONTS=../../../../assets/views/vd_epic_dashboard/fonts


# rm -rf $STATIC_FONTS
# mkdir -p $STATIC_FONTS
# mv -f ./fonts/* $STATIC_FONTS/
# cd $STATIC_FONTS && git add -A