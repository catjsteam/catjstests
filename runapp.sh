#!/bin/bash

apparg="$1";
echo ******** run an applications [jquery | angularjs | backbone_require]
echo running app $apparg

PATHARG="/home/arik/dev/projects/lastboy/catjstests/app/todomvc/$apparg/cat-project"

echo $PATHARG
cd $PATHARG

sudo catcli -cbasr


