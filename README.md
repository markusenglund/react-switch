A draggable toggle-switch component for React.

[![npm](https://img.shields.io/npm/v/react-switch.svg)](https://www.npmjs.com/package/react-switch)
[![npm](https://img.shields.io/npm/dm/react-switch.svg)](https://www.npmjs.com/package/react-switch)
[![GitHub stars](https://img.shields.io/github/stars/markusenglund/react-switch.svg?style=social&label=Stars)](https://github.com/markusenglund/react-switch)
[![gzip size](http://img.badgesize.io/https://unpkg.com/react-switch/dist/react-switch.min.js?compression=gzip)](https://unpkg.com/react-switch/dist/react-switch.min.js)

<img src="https://media.giphy.com/media/l0IsI0EHlJx2kyCrK/giphy.gif" />
<img src="https://media.giphy.com/media/3ov9k7TupiaveDlQ5O/giphy.gif" />

- **Draggable** with the mouse or with a touch screen.
- **Customizable** - Easy to customize size, color and more.
- **Accessible** to visually impaired users and those who can't use a mouse.
- **Small package size** - 2 kB gzipped.
- **It Just Works** - Sensible default styling. Uses inline styles, so no need to import a separate css file.

## Demo

[Take a look at the demo](https://react-switch.netlify.com/)

## Installation

```bash
npm install react-switch
```

## Usage

```javascript
import React, { Component } from "react";
import Switch from "react-switch";

class SwitchExample extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <label>
        <span>Switch with default style</span>
        <Switch onChange={this.handleChange} checked={this.state.checked} />
      </label>
    );
  }
}
```

### What's the deal with the label tag?

The Switch component in the above example is nested inside a label tag. This makes sure that the label text is read out to people with reduced sight who use screen readers and enables users to click on the text to toggle the switch. If you would only put some text next to the switch but not inside a `label` element, the screen reader will just read out "switch off" and the user will have no idea what it is for.

If you don't want to nest the switch inside a label, you can use the `htmlFor` attribute on the label-element and set it to the same value as the `id` of the switch. Alternatively, you can use the `aria-labelledby` or `aria-label` props to give the switch a label. You can see examples of this at the bottom of the [demo page](https://react-switch.netlify.com/).

## API

| Prop                                  | Type              | Default                                                                                  | Description                                                                                                                                                                                                               |
| ------------------------------------- | ----------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| checked                               | bool              | **Required**                                                                             | If true, the switch is set to checked. If false, it is not checked.                                                                                                                                                       |
| onChange _([checked], [event], [id])_ | func              | **Required**                                                                             | Invoked when the user clicks or drags the switch. It is passed three arguments: _checked_, which is a boolean that describes the presumed future state of the checked prop (1), the event object (2) and the id prop (3). |
| disabled                              | bool              | false                                                                                    | When disabled, the switch will no longer be interactive and its colors will be greyed out.                                                                                                                                |
| offColor                              | string            | '#888'                                                                                   | The switch will take on this color when it is _not_ checked. Only accepts hex-colors.                                                                                                                                     |
| onColor                               | string            | '#080'                                                                                   | The switch will take on this color when it is checked. Only accepts hex-colors.                                                                                                                                           |
| offHandleColor                        | string            | '#fff'                                                                                   | The handle of the switch will take on this color when it is _not_ checked. Only accepts hex-colors.                                                                                                                       |
| onHandleColor                         | string            | '#fff'                                                                                   | The handle of the switch will take on this color when it is checked. Only accepts hex-colors.                                                                                                                             |
| handleDiameter                        | number            | _undefined_                                                                              | The diameter of the handle, measured in pixels. By default it will be 2 pixels smaller than the height of the switch.                                                                                                     |
| uncheckedIcon                         | element _or_ bool | [Default value](https://github.com/markusenglund/react-switch/blob/master/src/icons.jsx) | An icon that will be shown on the switch when it is **not** checked. Pass in _false_ if you don't want any icon.                                                                                                          |
| checkedIcon                           | element _or_ bool | [Default value](https://github.com/markusenglund/react-switch/blob/master/src/icons.jsx) | An icon that will be shown on the switch when it is checked. Pass in _false_ if you don't want any icon.                                                                                                                  |
| boxShadow                             | string            | _undefined_                                                                              | The default box-shadow of the handle. You can read up on the box-shadow syntax [on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow?v=b).                                                                 |
| activeBoxShadow                       | string            | '0 0 2px 3px #3bf'                                                                       | The box-shadow of the handle when it is active or focused. Do not set this to null, since it is important for accessibility.                                                                                              |
| height                                | number            | 28                                                                                       | The height of the background of the switch, measured in pixels.                                                                                                                                                           |
| width                                 | number            | 56                                                                                       | The width of the background of the switch, measured in pixels.                                                                                                                                                            |
| className                             | string            | _undefined_                                                                              | Set as the className of the outer shell of the switch. Useful for positioning the switch.                                                                                                                                 |
| id                                    | string            | _undefined_                                                                              | Set as an attribute to the embedded checkbox. This is useful for the associated label, which can point to the id in its htmlFor attribute.                                                                                |

---

**NOTE**: All additional props will be passed to the nested `input` element.

The following props have to be either 3-digit or 6-digit hex-colors:
**offColor, onColor, offHandleColor,** and **onHandleColor.** This is because this library calculates intermediate color values based on the hex-color strings.

Examples of valid colors: '#abc', '#123456'

Examples of **invalid** colors: 'red', 'rgb(0,0,0)'

## Development

You're welcome to contribute to react-switch. Keep in mind that big changes have to be thoroughly tested on lots of different browsers and devices before they can be merged.

To set up the project:

1.  Fork and clone the repository
2.  `$ npm install`
3.  `$ npm run dev`

The demo page will then be served on http://localhost:8000/ in watch mode, meaning you don't have refresh the page to see your changes.

## Contributors

<table>
  <tbody>
    <tr>
      <td align="center">
        <img src="https://avatars3.githubusercontent.com/u/22945927?s=150&v=4" width="120">
        <br />
        <a href="https://github.com/markusenglund">Markus Englund<a/>
      </td>
      <td align="center">
        <img src="https://avatars0.githubusercontent.com/u/4565854?v=4" width="120">
        <br />
        <a href="https://github.com/timothymclane">Timothy McLane<a/>
      </td>
    </tr>
  </tbody>
</table>

## License

MIT
