#!/bin/bash

apparg="$1";
echo ******** run an applications [todomvc/jquery | todomvc/angularjs | todomvc/backbone_require | iframe | snapshot | events]
echo running app $apparg

CWD="$(pwd)"
PATHARG="$CWD/app/$apparg/cat-project"

echo $PATHARG
cd $PATHARG

sudo catcli -cbasr


