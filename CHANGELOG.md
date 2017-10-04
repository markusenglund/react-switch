# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unfinished]
### Refactor
- Dependency on 'react-draggable' is removed and replaced with new drag logic.

### Fixed
- Glitch related to faulty 'inTransition' state fixed due to inTransition no longer existing.

## [1.2.0 - 2017-09-29]
### Fixed
- Removed react and react-dom from dependencies.
- Css-file replaced with inline styles to avoid webpack style-loader dependence.

### Changed
- Cursor style of handle changed to pointer instead of grabbing.


## [1.1.0] - 2017-09-26
### Fixed
- Pressing the spacebar while the switch is focused no longer causes the page to scroll.
- Disabling the switch now sets opacity to 0.5 as it should.
- Fixed glitch where the left property of the switch-handle would be off by one if checked was initially set to true.

### Deprecated
- The 'name' and 'value' properties will be removed in the next major version since I don't believe they serve any purpose in a controlled component.