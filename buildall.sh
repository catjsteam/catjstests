#!/bin/bash

echo ******** build all applications

BASEPATH='/home/arik/dev/projects/lastboy/catjstests/app'
ARRAY=( 'todomvc/jquery' 'todomvc/angularjs' 'todomvc/backbone_require' 'iframe' 'snapshot' 'events' 'iframe')
ELEMENTS=${#ARRAY[@]}

for (( i=0;i<$ELEMENTS;i++)); do
     cd $BASEPATH/${ARRAY[${i}]}/cat-project
     echo $BASEPATH/${ARRAY[${i}]}/cat-project
     catcli -cba
done