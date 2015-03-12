#!/bin/bash

echo ******** clean all applications
BASEPATH='/home/arik/dev/projects/lastboy/catjstests/app'
ARRAY=( 'todomvc/jquery' 'todomvc/angularjs' 'todomvc/backbone_require' 'snapshot' 'events' 'iframe')
ELEMENTS=${#ARRAY[@]}

for (( i=0;i<$ELEMENTS;i++)); do
     cd $BASEPATH/${ARRAY[${i}]}/cat-project
     echo $BASEPATH/${ARRAY[${i}]}/cat-project
     catcli --task t@wipe
done