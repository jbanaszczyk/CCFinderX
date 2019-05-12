@echo off

setlocal

set currDir=%~dp0
cd %currDir%

set platform=%1
set config=%2
set destination=..\..\bin\%platform%\%config%

echo ==[ Destination: %platform% %config% ]=======

xcopy /seyiqr files\* %destination%\

xcopy /seyiqr ..\..\libs\boost\stage\win\%platform%\lib\*.dll %destination%\

set icuLib=bin
if %platform% EQU "x64" set icuLib=bin64

xcopy /seyiqr ..\..\libs\icu\icu4c\%icuLib%\*.dll %destination%\

endlocal
