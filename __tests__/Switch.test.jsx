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

  it('matches snapshot with custom props excl disabled', () => {
    const wrapper = render(
      <Switch
        onChange={noop}
        checked
        onColor="#abc"
        handleColor="#def"
        height={13}
        width={37}
        id="foo"
        aria-label="bar"
        aria-labelledby="baz"
        className="qux"
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
describe('root div', () => {
  // Actually useful stuff for disabled
  // wrapper.setProps({ disabled: false });
  // it('goes back to normal opacity when disabled is changed to false', () => {
  //   expect(wrapper.props().style.opacity).toBe(1);
  // });
  // it('goes back to normal cursor when disabled is changed to false', () => {
  //   expect(wrapper.props().style.cursor).toBe('pointer');
  // });
});
// Actually useful for changing checked
// wrapper.setProps({ checked: false });
// it('has zero opacity when checked changed to false', () => {
//   expect(wrapper.find('.react-switch-fg').get(0).props.style.opacity).toBe(0);
// });

// it('gets 0.5 opacity when left is dragged to the middle', () => {

// });


// wrapper.setProps({ checked: true });
// expect(wrapper.state('left')).toBe(29);
// expect(wrapper.find('#foo').get(0).props.style.left).toBe(29);

// const wrapper = shallow(<Switch onChange={noop} checked={false} />);
// const handle = wrapper.find('.react-switch-handle').get(0);
// it('has no box-shadow normally', () => {
//   expect(handle.props.style.boxShadow).toBeNull();
// });
// wrapper.find('.react-switch-handle').simulate('focus');
// it('gets a boxShadow on focus and loses it on blur', () => {
//   wrapper.find('.react-switch-handle').simulate('focus');
//   expect(wrapper.find('.react-switch-handle').get(0).props.style.boxShadow).toBe('0px 0px 1px 2px #4D90FE');
//   wrapper.find('.react-switch-handle').simulate('blur');
//   expect(wrapper.find('.react-switch-handle').get(0).props.style.boxShadow).toBeNull();
