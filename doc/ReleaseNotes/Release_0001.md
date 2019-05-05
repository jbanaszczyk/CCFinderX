# Release 0001

## The goal

The goal is: to compile CcFinderX
* Platform: Windows 32
* Toolchain:
  * Visual Studio 2017 (v14.1) Community Edition
  * IntelliJ Ultimate 2019.1 (probably Community Edition would be enough)
* Libraries:
  * Boost 1.70
  * ICU4C 59.1
  * JDK 8.211
  * CPython 2.7.16
  * Java 8

## Folders

Location of library folders will be changed in the future, for now lets copy libraries to `libs` subfolder as is.

## Libraries

### Boost 1.70

https://sourceforge.net/projects/boost/files/boost-binaries/1.70.0/

Download and install both:
* boost_1_70_0-msvc-14.1-64.exe
* boost_1_70_0-msvc-14.1-32.exe
* installation folder (relatively to project folder):
  * libs\boost_1_70_0

Edit file: `libs\boost_1_70_0\boost\system\detail\config.hpp`

Before:
```CPP
#if defined(__has_cpp_attribute)
#if __has_cpp_attribute(clang::require_constant_initialization)
# undef BOOST_SYSTEM_REQUIRE_CONST_INIT
# define BOOST_SYSTEM_REQUIRE_CONST_INIT [[clang::require_constant_initialization]]
#endif
#endif
```

After
```CPP
#if defined(__has_cpp_attribute)
#if !defined(_MSC_VER)
#if __has_cpp_attribute(clang::require_constant_initialization)
# undef BOOST_SYSTEM_REQUIRE_CONST_INIT
# define BOOST_SYSTEM_REQUIRE_CONST_INIT [[clang::require_constant_initialization]]
#endif
#endif
#endif

```

### ICU4C 59.1

https://www.npcglib.org/~stathis/blog/precompiled-icu/

Unpack to (relatively to project folder)
* libs\ICU4C-59.1

### ICU4J 59.1

https://github.com/unicode-org/icu/releases/tag/release-59-2

Download:
* [icu4j-59_2.jar](https://github.com/unicode-org/icu/releases/download/release-59-2/icu4j-59_2.jar)
* [icu4j-charset-59_2.jar](https://github.com/unicode-org/icu/releases/download/release-59-2/icu4j-charset-59_2.jar)
* [icu4j-localespi-59_2.jar](https://github.com/unicode-org/icu/releases/download/release-59-2/icu4j-localespi-59_2.jar)

into (relatively to project folder):
* libs\ICU4J-59.1


### JDK 8u211

https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html

Install latest versions (both 32-bit and 64-bit)

Than copy (both JDKs and JREs, relatively to project folder):
* C:\Program Files\Java\jdk1.8.0_211 -> libs\Java\x64\jdk1.8.0_211
* C:\Program Files\Java\jre1.8.0_211 -> libs\Java\x64\jre1.8.0_211
* C:\Program Files (x86)\Java\jdk1.8.0_211 -> libs\Java\win32\jdk1.8.0_211
* C:\Program Files (x86)\Java\jre1.8.0_211 -> libs\Java\win32\jre1.8.0_211

### Python 2.7.16 (do not use Python 3 here)

https://www.python.org/downloads/

Install latest versions of Python2 (both 32-bit and 64-bit)
* for example: 32-bit: C:\Python27\win32
* for example: 64-bit: C:\Python27\x64

Copy python.dll:
* C:\Windows\System32\python27.dll -> c:\Python27\win32\
* C:\Windows\SysWOW64\python27.dll -> c:\Python27\x64\

(temporary) Make `_d` libs http://gwyddion.net/documentation/user-guide-en/installation-compiling-msvc.html:
* copy c:\Python27\win32\libs\python27.lib c:\Python27\win32\libs\python27_d.lib
* copy c:\Python27\x64\libs\python27.lib c:\Python27\x64\libs\python27_d.lib

Edit both `pyconfig.h` - comment out `#define Py_DEBUG`
* win32\include\pyconfig.h
* x64\include\pyconfig.h

Copy both Pythons to `libs` subdirectory (relatively to project folder).

### SWT 4.9 (Standard Widget Toolkit)

Download from http://download.eclipse.org/eclipse/downloads/drops4/R-4.9-201809060745/ (bottom of the page)

Download and unpack both 32-bit and 64-bit Windows versions


### PathHSON

Download and add as `libs\PathJSON\pathjson.jar`: https://github.com/jbanaszczyk/CCFinderX/blob/master/libs/PathJSON/pathjson.jar

### Trove 2.0.1

Download from https://sourceforge.net/projects/trove4j/files/trove/2.1.0/

Unpack as `libs\trove-2.1.0`

Latest version is available, not tested yet: https://bitbucket.org/trove4j/trove/downloads/

### Result

```
.\libs
+--boost_1_70_0
|  +--boost
|  +--doc
|  +--lib32-msvc-14.1
|  +--lib64-msvc-14.1
|  +--libs
|  +--more
|  +--status
|  \--tools
+--ICU4C-59.1
|  +--bin
|  +--bin64
|  +--data
|  +--include
|  |  \--unicode
|  +--lib
|  \--lib64
+--ICU4J-59.1
+--Java
|  +--win32
|  |  +--jdk1.8.0_211
|  |  |  +--bin
|  |  |  +--include
|  |  |  +--jre
|  |  |  \--lib
|  |  \--jre1.8.0_211
|  |     +--bin
|  |     \--lib
|  \--x64
|     +--jdk1.8.0_211
|     |  +--bin
|     |  +--include
|     |  +--jre
|     |  \--lib
|     \--jre1.8.0_211
|        +--bin
|        \--lib
+--PathJSON
+--Python2
|  +--win32
|  |  +--DLLs
|  |  +--Doc
|  |  +--include
|  |  +--Lib
|  |  +--libs
|  |  +--Scripts
|  |  +--tcl
|  |  \--Tools
|  \--x64
|     +--DLLs
|     +--Doc
|     +--include
|     +--Lib
|     +--libs
|     +--Scripts
|     +--tcl
|     \--Tools
+--swt
|  +--swt-4.9-win32-win32-x86
|  |  \--about_files
|  \--swt-4.9-win32-win32-x86_64
|     \--about_files
\--trove-2.1.0
   +--javadocs
   |  +--gnu
   |  +--index-files
   |  \--resources
   +--lib
   +--src
   |  \--gnu
   \--test
      \--gnu

```
