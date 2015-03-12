#!/bin/bash

apparg="$1";
echo ******** run an applications [todomvc/jquery | todomvc/angularjs | todomvc/backbone_require | iframe | snapshot | events]
echo running app $apparg

PATHARG="/home/arik/dev/projects/lastboy/catjstests/app/$apparg/cat-project"

echo $PATHARG
cd $PATHARG

sudo catcli -cbasr


