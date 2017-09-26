# react-switch
A draggable, customizable and accessible toggle-switch component for React. 

## Demo

[Take a look at the demo.](https://yogaboll.github.io/react-switch/)

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
| offColor | string | 'grey' | The switch will take on this color when it is *not* checked |
| onColor | string | 'green' | The switch will take on this color when it is checked. |
| handleColor | string | 'white' | The handle of the switch will take on this color when it is *not* active. If you use this prop, make sure to also change *activeHandleColor* to something appropriate. |
| activeHandleColor | string | '#ddd' | The handle of the switch will take on this color when it is active, meaning when it is dragged or clicked. |
| height | number | 28 | The height of the component, measured in pixels. |
| width | number | 56 | The width of the component, measured in pixels. |
| className | string | null | Set as the className of the outer shell of the switch. |
| id | string | null | Set as an attribute to the embedded checkbox. This is useful for the associated label, which can point to the id in its htmlFor attribute. |
| aria-labelledby | string | null | Set as an attribute of the embedded checkbox. This should be the same as the id of a label. |
| aria-label | string | null | Set as an attribute of the embedded checkbox. Its value will only be seen by screen readers. |

## License

MIT