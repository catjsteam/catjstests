#!/bin/bash

echo ******** clean all applications
CWD="$(pwd)"
BASEPATH="$CWD/app"
ARRAY=( 'todomvc/jquery' 'todomvc/angularjs' 'todomvc/backbone_require' 'iframe' 'snapshot' 'events' 'iframe', 'basic', 'angular-dnd')
ELEMENTS=${#ARRAY[@]}

for (( i=0;i<$ELEMENTS;i++)); do
     cd $BASEPATH/${ARRAY[${i}]}/cat-project
     echo $BASEPATH/${ARRAY[${i}]}/cat-project
     catcli --task t@wipe
done