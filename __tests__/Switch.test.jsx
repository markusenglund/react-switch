import React from 'react';
import { shallow, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import Switch from '../src';

const noop = () => {};

describe('Switch', () => {
  it('sets position based on checked-prop', () => {
    const wrapper = shallow(
      <Switch
        onChange={noop}
        checked={false}
      />
    );
    expect(wrapper.state('left')).toBe(1);
  });

  it('matches snapshot', () => {
    const wrapper = render(<Switch onChange={noop} checked={false} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('matches more advanced snapshot', () => {
    const wrapper = render(
      <Switch
        onChange={noop}
        checked
        disabled
        onColor="#d1d2d3"
        handleColor="pink"
        height={80}
        width={90}
        id="test-test-123"
        aria-label="super-secret-label"
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
