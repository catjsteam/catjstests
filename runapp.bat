
echo off
echo "******** run an applications [todomvc\jquery | todomvc\angularjs | todomvc\backbone_require | iframe | snapshot | events]"
echo running app %1

if "%1"=="" goto valid

set PATHARG="%~dp0app\%1\cat-project"

echo %PATHARG%
start  "runas /user:administrator" cmd /c "cd %PATHARG% & catcli -cbasr "
goto end


:valid
echo " ******* No application name was set "

:end