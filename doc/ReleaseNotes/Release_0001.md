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

### ICU4C 59.1

https://www.npcglib.org/~stathis/blog/precompiled-icu/

Unpack to (relatively to project folder)
* libs\icu-59.1

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

Copy both Pythons to `libs` subdirectory (relatively to project folder):

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
+--icu-59.1
|  +--bin
|  +--bin64
|  +--data
|  +--include
|  +--lib
|  \--lib64
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
\--Python2
   +--win32
   |  +--DLLs
   |  +--Doc
   |  +--include
   |  +--Lib
   |  +--libs
   |  +--Scripts
   |  +--tcl
   |  \--Tools
   \--x64
      +--DLLs
      +--Doc
      +--include
      +--Lib
      +--libs
      +--Scripts
      +--tcl
      \--Tools

```
