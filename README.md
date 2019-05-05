# CCFinderX

Repository contains yet another clone of [CCFinderX](http://www.ccfinder.net)

## AIST CCFinderX

AIST CCFinderX is a code-clone detector, which detects code clones (duplicated code fragments) from source files written in Java, C/C++, COBOL, VB, C#.

### Original doc

Original documentation is available as [wiki](https://github.com/jbanaszczyk/CCFinderX/wiki)

## Manifesto: Development goals

* Reliable source code:
  * Windows and Linux: should compile using CLion (cmake) + IntelliJ
  * solution should be made portable (solution should not depend on installed packages)
  * Thousands of compile time warnings should be cleared
  * Dozens of run time errors should be cleared
* Update language parsers
  * Exotic parsers (like cobol) can be removed
  * Existing language parsers should upgraded (C++, Java, C#)
  * Some popular language parsers should be provided (JavaScript, Python)
  * Parsing engine should be changed/extended to use native AST
* Add new features:
  * UI: directory clustering to show clones groups
  * UI: add AtomiQ style visualisation
* Minor improvements
  * Remove python from run time chain
