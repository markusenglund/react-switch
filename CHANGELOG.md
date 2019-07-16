# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [5.0.1 - 2019-07-16]

### Fixed

- Minor typescript definition fix.

## [5.0.0 - 2019-04-22]

### Added

- It's now possible to give the Switch any prop (such as aria-\* props or tabIndex) and it will automatically be passed to the nested `input`-element.
- Improved Typescript compatibility by using `exports:named` option in rollup. This could possibly be breaking for some obscure setups.

### Changed

- Replaced deprecated `componentWillReceiveProps` lifecycle hook with `componentDidUpdate`, which means it now works in strict mode.

### Fixed

- Now works properly with right-to-left languages.

## [4.1.0 - 2019-02-17]

### Added

- Add support for name attribute

## [4.0.0 - 2019-01-30]

### Changed

- The switch now includes a hidden nested checkbox input, which creates an expience more akin to a normal checkbox - clicking on the label will now cause a toggle, and the VoiceOver screen reader will now reliably read the label.
- The switch will now always fire the onChange event if the dragStop event occurs <250ms after the dragStart event since that feels like a click.
- Aria role changed from "checkbox" to "switch".
- Pressing enter no longer activates the switch (spacebar still does)

### Added

- Add new tabIndex prop

### Fixed

- Fix glitch where the clicking the handle wouldn't trigger onChange event when browser window was out of focus on Windows.

## [3.0.3 - 2018-06-15]

### Fixed

- Fix glitch where the switch would disintegrate if it had a parent with text-align set to _center_ or _right_

## [3.0.2 - 2018-06-07]

### Changed

- Add the correct gzip badge.

## [3.0.1 - 2018-06-07]

### Changed

- Some more byte shaving.

## [3.0.0 - 2018-06-07]

### Changed

- Shave off some extra bytes by setting interop: false in rollup config.

### Fixed

- Fix peculiar glitch when used with preact-compat.

## [3.0.0-beta.0 - 2018-06-06]

### Changed

- Project structure was completely revamped to reduce bundle size:

1.  Use rollup to bundle the different source files.
2.  Use buble instead of babel for transpiling since it produces tinier output.
3.  Remove prop-types from production mode. Prop-types are still there in development mode so developer experience is unchanged.
4.  Mangle property names with uglify by putting a \$-sign at the start of the properties that are safe to mangle.

### Fixed

- Corrected more dead links in README. Thanks, [Valery Bugakov](https://github.com/valerybugakov).

## [2.3.2 - 2018-04-20]

### Fixed

- Corrected dead links in README

## [2.3.1 - 2018-04-08]

### Added

- Devs now receive a console warning if they have passed an invalid color prop.

## [2.3.0 - 2017-12-27]

### Added

- Added TypeScript declaration file

## [2.2.0 - 2017-12-19]

### Added

- onChange callback function is now given the id prop that the user has given as the third argument.

### Fixed

- Improved responsiveness on mobile by removing the 300 ms delay when clicking the background.
- It is no longer possible to select text while holding down the switch.
- Highlighting effect when clicking the switch on mobile webkit browsers has been removed.
- Fixed bug where dragging the switch would create a strange shadow on IOS.

## [2.1.0 - 2017-11-22]

### Added

- onChange callback function is now given the event that activated the callback as a second argument.

## [2.0.1 - 2017-11-03]

### Changed

- prop-types is switched from peerDependency to dependency. This should reduce frustration for devs who don't use prop-types in their project, but shouldn't affect anyone else.

## [2.0.0 - 2017-10-31]

### Added

- Added some keywords

### Changed

- Improved demo with best practices for labels.
- README clarifications

## [2.0.0-rc.2.1]

### Fixed

- Removed some unnecessary files from the package.

## [2.0.0-rc.2] - 2017-10-13

### Refactor

- The switch no longer uses the opacity hack to transition between color. This involved stacking two divs on top of each other and varying the opacity of the top div. This caused some weird visual artifacts.

### Changed

- onColor and offColor props can now only take colors in the form of '#xxxxxx'. Gradients and rgb(xxx, xxx, xxx) are no longer supported.
- handleColor prop is replaced by onHandleColor and offHandleColor.
- The boxShadow the handle gets when selected is now available in the activeBoxShadow prop. The boxShadow prop is now the boxShadow the handle has when it is not selected, and is null by default.

### Fixed

- The switch no longer has a pixel wide gloria of the offColor when checked.

### Removed

- activeHandleColor prop is removed because of lack of usefulness.

## [2.0.0-rc.1] - 2017-10-08

### Added

- New prop boxShadow. It acts just like outline, but I called it boxShadow since that is the actual css attribute that is being controlled.
- New props checkedIcon and uncheckedIcon. They have a checkmark and an x as default. Custom elements can be given as icons or the boolean value 'false', which will remove icons.

### Refactor

- Dependency on 'react-draggable' is removed and replaced with new drag logic.

### Fixed

- Glitch related to faulty 'inTransition' state fixed due to inTransition no longer existing.

## Changed

- Outline disappears when the users stops holding down the mouse. This is the same behaviour as google's switch-button implementation.
- onChange callback function is now also triggered when enter key is pressed in violation of wai-aria checkbox spec. This is reasonably since it's in the toggle-button spec.

## Removed

- The deprecated 'name' and 'value' properties are removed.

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
