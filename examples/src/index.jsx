import React from 'react';
import { render } from 'react-dom';
import Switch from '../../dist';

render(
  <div>
    Hello world!, asdfadsf
    <Switch
      onChange={() => console.log("HEJ")}
      checked={true}
    />
  </div>,
  document.getElementById('app')
);
