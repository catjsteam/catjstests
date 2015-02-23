#!/bin/bash

echo ******** clean all applications

ARRAY=( '/home/arik/dev/projects/lastboy/catjstests/app/todomvc/jquery' '/home/arik/dev/projects/lastboy/catjstests/app/todomvc/angularjs' '/home/arik/dev/projects/lastboy/catjstests/app/todomvc/backbone_require')
ELEMENTS=${#ARRAY[@]}

for (( i=0;i<$ELEMENTS;i++)); do
     cd ${ARRAY[${i}]}/cat-project
     echo cd ${ARRAY[${i}]}
     catcli -cba
done