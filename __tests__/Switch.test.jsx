import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Switch from "../src";

const noop = () => {};

describe("Props", () => {
  it("matches snapshot with default props", () => {
    const { container } = render(<Switch checked={false} onChange={noop} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("matches snapshot with custom props", () => {
    const { container } = render(
      <Switch
        checked
        onChange={noop}
        disabled
        onColor="#abc"
        offHandleColor="#def"
        handleDiameter={9}
        checkedIcon={
          <div
            style={{
              color: "pink",
              paddingTop: 2,
              paddingLeft: 6,
              fontSize: 20
            }}
          >
            ❤
          </div>
        }
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        height={13}
        width={37}
        className="qux"
        id="foo"
        aria-labelledby="baz"
        aria-label="bar"
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("handle", () => {
  it("sets a boxShadow on focus and loses it on blur", () => {
    const { container } = render(<Switch onChange={noop} checked={false} />);
    fireEvent.focus(
      container.querySelector("input")
    );
    expect(
      container.querySelector(".react-switch-handle").style.getPropertyValue('box-shadow')
    ).toBe("0 0 2px 3px #3bf");
    fireEvent.blur(
      container.querySelector("input")
    );
    expect(
      container.querySelector(".react-switch-handle").style.getPropertyValue('box-shadow')
    ).toBe('');
  });

  it("doesn't call onChange on some other key", () => {
    const mockOnChange = jest.fn();
    const { container } = render(<Switch onChange={mockOnChange} checked={false} />);
    fireEvent.focus(
      container.querySelector("input")
    );
    fireEvent.keyDown(
      container.querySelector("input"),
      { keyCode: 14, preventDefault: noop }
    );
    expect(mockOnChange).not.toBeCalled();
  });
});

describe("checked prop", () => {
  it("affects transform style when it changes", () => {
    const { container, rerender } = render(<Switch onChange={noop} checked={false} />);
    rerender(<Switch onChange={noop} checked />);
    expect(
      container.querySelector(".react-switch-handle").style.getPropertyValue('transform')
    ).toBe("translateX(29px)");
    rerender(<Switch onChange={noop} checked={false} />);
    expect(
      container.querySelector(".react-switch-handle").style.getPropertyValue('transform')
    ).toBe("translateX(1px)");
  });

  it("affects background when it changes", () => {
    const { container, rerender } = render(
      <Switch
        onChange={noop}
        checked={false}
        offColor="#aabbcc"
        onColor="#ddeeff"
      />
    );
    rerender(
      <Switch
        onChange={noop}
        checked
        offColor="#aabbcc"
        onColor="#ddeeff"
      />
    );
    expect(container.querySelector(".react-switch-bg").style.getPropertyValue('background')).toBe(
      "rgb(221, 238, 255)"
    );
    rerender(
      <Switch
        onChange={noop}
        checked={false}
        offColor="#aabbcc"
        onColor="#ddeeff"
      />
    );
    expect(container.querySelector(".react-switch-bg").style.getPropertyValue('background')).toBe(
      "rgb(170, 187, 204)"
    );
  });
});

// Test dragging behaviour
/*
describe("drag related behaviour", () => {
  it("triggers onChange callback when isDragging is never set to true", () => {
    const mockOnChange = jest.fn();
    const wrapper = shallow(<Switch onChange={mockOnChange} checked={false} />);
    wrapper
      .find("input")
      .simulate("touchstart", { touches: [{ clientX: 100 }] });
    wrapper.find("input").simulate("touchend", { preventDefault: noop });
    expect(mockOnChange.mock.calls[mockOnChange.mock.calls.length - 1][0]).toBe(
      true
    );
  });
  it("triggers onChange when handle is dragged half way or more", () => {
    const mockOnChange = jest.fn();
    const wrapper = shallow(
      <Switch onChange={mockOnChange} checked={false} height={15} width={30} />
    );
    wrapper
      .find("input")
      .simulate("touchstart", { touches: [{ clientX: 100 }] });
    wrapper
      .find("input")
      .simulate("touchmove", { touches: [{ clientX: 107.5 }] });
    wrapper.find("input").simulate("touchend", { preventDefault: noop });
    expect(mockOnChange.mock.calls[mockOnChange.mock.calls.length - 1][0]).toBe(
      true
    );
  });
  it("doesn't trigger onChange when handle is dragged less than half way", () => {
    const mockOnChange = jest.fn();
    const wrapper = shallow(
      <Switch onChange={mockOnChange} checked={false} height={15} width={30} />
    );
    wrapper
      .find("input")
      .simulate("touchstart", { touches: [{ clientX: 100 }] });
    wrapper
      .find("input")
      .simulate("touchmove", { touches: [{ clientX: 107.4 }] });
    wrapper.find("input").simulate("touchend", { preventDefault: noop });
    expect(mockOnChange).not.toBeCalled();
  });
});
*/
