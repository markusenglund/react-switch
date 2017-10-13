# react-switch
[![npm](https://img.shields.io/npm/v/react-switch.svg)](https://www.npmjs.com/package/react-switch)
[![npm](https://img.shields.io/npm/dm/react-switch.svg)](https://www.npmjs.com/package/react-switch)
[![GitHub stars](https://img.shields.io/github/stars/yogaboll/react-switch.svg?style=social&label=Stars)](https://github.com/yogaboll/react-switch)

A draggable, customizable and accessible toggle-switch component for React.

<img src="https://media.giphy.com/media/l0IsI0EHlJx2kyCrK/giphy.gif" />
<img src="https://media.giphy.com/media/3ov9k7TupiaveDlQ5O/giphy.gif" />


## Demo

[Take a look at the demo](https://yogaboll.github.io/react-switch/)

## Installation
```bash
npm install react-switch --save
```

## Usage
```javascript
import React, { Component } from 'react';
import Switch from 'react-switch';

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
      <div>
        <label htmlFor="example-switch">Look, an example switch!</label>
        <Switch
          onChange={this.handleChange}
          checked={this.state.checked}
          id="example-switch"
        />
      </div>
    );
  }
}
```

## API

| Prop | Type | Default | Description |
| ---- |----- | ------- | ----------- |
| checked | bool | **Required** | If true, the switch is set to checked. If false, it is not checked. |
| onChange | func | **Required** | Invoked when the user clicks or drags the switch. It is passed one argument, *checked*, which is a boolean that describes the presumed future state of the checked prop. |
| disabled | bool | false | When disabled, the switch will no longer be interactive and its colors will be greyed out. |
| offColor | string | '#888' | The switch will take on this color when it is *not* checked |
| onColor | string | '#080' | The switch will take on this color when it is checked. |
| offHandleColor | string | '#fff' | The handle of the switch will take on this color when it is *not* checked. |
| onHandleColor | string | '#fff' | The handle of the switch will take on this color when it is checked. |
| handleDiameter | number | null | The diameter of the handle, measured in pixels. By default it will be slightly smaller than the height of the switch. |
| uncheckedIcon | element *or* bool | [Default value](https://github.com/yogaboll/react-switch/blob/master/src/icons.jsx) | An icon that will be shown on the switch when it is **not** checked. Pass in *false* if you don't want any icon. |
| checkedIcon | element *or* bool | [Default value](https://github.com/yogaboll/react-switch/blob/master/src/icons.jsx) | An icon that will be shown on the switch when it is checked. Pass in *false* if you don't want any icon. |
| boxShadow | string | null | The default box-shadow of the handle. You can read up on the box-shadow syntax [on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow?v=b). |
| activeBoxShadow | string | '0px 0px 2px 3px #33bbff' | The box-shadow of the handle when it is active or focused. Do not set this to null, since it is important for accessibility.
| height | number | 28 | The height of the background of the switch, measured in pixels. |
| width | number | 56 | The width of the background of the switch, measured in pixels. |
| className | string | null | Set as the className of the outer shell of the switch. Useful for positioning the switch. |
| id | string | null | Set as an attribute to the embedded checkbox. This is useful for the associated label, which can point to the id in its htmlFor attribute. |
| aria-labelledby | string | null | Set as an attribute of the embedded checkbox. This should be the same as the id of a label. You should use this if you don't want your label to be a \<label> element|
| aria-label | string | null | Set as an attribute of the embedded checkbox. Its value will only be seen by screen readers. |

## License

MIT