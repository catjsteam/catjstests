#!/bin/bash

echo ******** build all applications

CWD="$(pwd)"
BASEPATH="$CWD/app"
ARRAY=( 'todomvc/jquery' 'todomvc/angularjs' 'todomvc/backbone_require' 'iframe' 'snapshot' 'events' 'basic' 'angular-dnd')
ELEMENTS=${#ARRAY[@]}

for (( i=0;i<$ELEMENTS;i++)); do
     cd $BASEPATH/${ARRAY[${i}]}/cat-project
     echo $BASEPATH/${ARRAY[${i}]}/cat-project
     catcli -cba
done