import React from 'react';
import { shallow, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import Switch from '../src';

const noop = () => {};

describe('Switch', () => {
  it('matches snapshot with default props', () => {
    const wrapper = render(<Switch onChange={noop} checked={false} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('matches snapshot with custom props', () => {
    const wrapper = render(
      <Switch
        onChange={noop}
        checked
        disabled
        onColor="#d1d2d3"
        handleColor="pink"
        height={80}
        width={90}
        className="example-class"
        id="foo"
        aria-label="bar"
        aria-labelledby="baz"
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
describe('root div', () => {
  it('gets className from props', () => {
    const wrapper = shallow(<Switch onChange={noop} checked={false} className="foo" />);
    expect(wrapper.hasClass('foo')).toBe(true);
  });
  // This might be better served by a snapshot
  it('gets correct styles from default props', () => {
    const wrapper = shallow(<Switch onChange={noop} checked={false} />);
    const { height, width, background, borderRadius, opacity, cursor } = wrapper.props().style;
    expect(height).toBe(28);
    expect(width).toBe(56);
    expect(background).toBe('grey');
    expect(borderRadius).toBe(14);
    expect(opacity).toBe(1);
    expect(cursor).toBe('pointer');
  });
  const wrapper = shallow(
    <Switch
      onChange={noop}
      checked={false}
      height={16}
      width={32}
      offColor="#abc"
      disabled
    />
  );
  const { height, width, background, borderRadius, opacity, cursor } = wrapper.props().style;
  it('gets height from props', () => {
    expect(height).toBe(16);
  });
  it('gets height from props', () => {
    expect(width).toBe(32);
  });
  it('gets background from props', () => {
    expect(background).toBe('#abc');
  });
  it('gets border-radius from props', () => {
    expect(borderRadius).toBe(8);
  });
  it('gets 0.5 opacity if disabled', () => {
    expect(opacity).toBe(0.5);
  });
  it('gets default cursor if disabled', () => {
    expect(cursor).toBe('default');
  });

  wrapper.setProps({ disabled: false });
  it('goes back to normal opacity when disabled is changed to false', () => {
    expect(wrapper.props().style.opacity).toBe(1);
  });
  it('goes back to normal cursor when disabled is changed to false', () => {
    expect(wrapper.props().style.cursor).toBe('pointer');
  });
});

describe('foreground', () => {
  const wrapper = shallow(<Switch onChange={noop} checked height={30} width={50} onColor="#abc" />);
  const { height, width, borderRadius, background, opacity } = wrapper.find('.react-switch-fg').get(0).props.style;
  it('gets dimensions from height and width props', () => {
    expect(height).toBe(30);
    expect(width).toBe(50);
    expect(borderRadius).toBe(15);
  });
  it('gets color from onColor prop', () => {
    expect(background).toBe('#abc');
  });
  it('has 1 opacity when checked', () => {
    expect(opacity).toBe(1);
  })
});

describe('handle', () => {
  it('gets positioned based on checked-prop', () => {
    const wrapper = shallow(
      <Switch
        onChange={noop}
        checked={false}
        id="foo"
      />
    );
    expect(wrapper.state('left')).toBe(1);
    expect(wrapper.find('#foo').get(0).props.style.left).toBe(1);

    wrapper.setProps({ checked: true });
    expect(wrapper.state('left')).toBe(29);
    expect(wrapper.find('#foo').get(0).props.style.left).toBe(29);
  });
});
