# clone

## New clone

```
git clone --recurse-submodules -j8 git@github.com:jbanaszczyk/CCFinderX.git
cd CCFinderX
```

## Alternatively

```
git clone git@github.com:jbanaszczyk/CCFinderX.git
cd CCFinderX
git submodule update --init --recursive
```

# Boost

## Windows

```
cd libs\boost
bootstrap
b2 -j%NUMBER_OF_PROCESSORS% --with-filesystem --with-thread --with-date_time --with-test --build-dir=.build --build-type=complete toolset=msvc-14.1 address-model=32 architecture=x86 stage --stagedir=stage\win\win32
b2 -j%NUMBER_OF_PROCESSORS% --with-filesystem --with-thread --with-date_time --with-test --build-dir=.build --build-type=complete toolset=msvc-14.1 address-model=64 architecture=x86 stage --stagedir=stage\win\x64
```

# ICU

According to https://github.com/unicode-org/icu/tree/master/icu4c

Install git-lfs if your git client does not already have LFS support: http://site.icu-project.org/repository

```
git clone https://github.com/unicode-org/icu.git
cd icu
```

## Windows

```
msbuild source\allinone\allinone.sln /p:Configuration=Release /p:Platform=x64 /p:SkipUWP=true
msbuild source\allinone\allinone.sln /p:Configuration=Debug /p:Platform=x64 /p:SkipUWP=true
msbuild source\allinone\allinone.sln /p:Configuration=Release /p:Platform=Win32 /p:SkipUWP=true
msbuild source\allinone\allinone.sln /p:Configuration=Debug /p:Platform=Win32 /p:SkipUWP=true

```
