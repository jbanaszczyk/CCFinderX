@echo off

setlocal

set platform=%1
set config=%2

set destination=..\..\bin\%platform%\%config%

xcopy /seyiqr files\* %destination%\

copy ..\CCFinderX\production\artifacts\GemX_jar_%platform%\GemX.jar %destination%\

for %%e in (bsc,exp,ilk,lib,pdb,pyc,lastcodeanalysissucceeded) do ( del /s %destination%\*.%%e 2>nul:)

endlocal
