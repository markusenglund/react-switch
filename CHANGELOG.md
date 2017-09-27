# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unfinished]
### Fixed
- Removed react and react-dom from dependencies

## [1.1.0] - 2017-09-26
### Fixed
- Pressing the spacebar while the switch is focused no longer causes the page to scroll.
- Disabling the switch now sets opacity to 0.5 as it should.
- Fixed glitch where the left property of the switch-handle would be off by one if checked was initially set to true.

### Deprecated
- The 'name' and 'value' properties will be removed in the next major version since I don't believe they serve any purpose in a controlled component.