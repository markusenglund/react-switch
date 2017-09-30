import React from 'react';
import { shallow } from 'enzyme';
import Switch from '../src';

describe('Switch', () => {
  it('sets state based on checked-prop', () => {
    const wrapper = shallow(
      <Switch
        onChange={() => {}}
        checked={false}
      />
    );
    expect(wrapper.state('left')).toBe(1);
  });
});
