@echo off

for %%p in (Win32,x64) do (
	for %%c in (Debug,Release) do (
		call postBuild.cmd %%p %%c
	)
)
