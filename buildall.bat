echo off
echo ******** build all applications

set "BASEPATH=%~dp0app"
set "ARRAY=todomvc\jquery todomvc\angularjs todomvc\backbone_require iframe snapshot events iframe basic angular-dnd"

 for %%i in (%ARRAY%) do (
     echo %BASEPATH%\%%i\cat-project\
     start  "runas /user:administrator" cmd /c "cd %BASEPATH%\%%i\cat-project\ & catcli -cba & exit"
)