@echo off

if not "%1" == "" (
  set OPEN_CLONEDATAFILE=-open "%~f1"
)

rem set set CCFINDERX_PYTHON_INTERPRETER_PATH=c:\Python27\64\python.exe
rem set set CCFINDERX_PYTHON_INTERPRETER_PATH=c:\Python27\32\python.exe

set CCFINDERX_TEMPORARY_DIRECTORY=%TEMP%

rem set up environment variables for Python
rem set PYTHONHOME=
rem set PYTHONPATH=
rem set PYTHONSTARTUP=

pushd "%~dp0"

java -jar GemX.jar

if ERRORLEVEL 1 goto REPORT_ERROR
popd
goto :EOF

:REPORT_ERROR
popd
pause
