import * as React from "react";

export interface ReactSwitchProps {
  /**
   * The checked state of the switch. If true, the switch is set to checked. If false, it is not checked.
   */
  checked: boolean;

  /**
   * Invoked when the user clicks or drags the switch.
   *
   * **checked** describes the presumed future state of the checked prop.
   *
   * **event** is a native MouseEvent when the handle is clicked or dragged, and a SyntheticEvent at all other times.
   *
   *  **id** is the ID prop of the switch.
   *
   * @param {boolean} checked
   * @param {object} event
   * @param {string} id
   */
  onChange: (
    checked: boolean,
    event: React.SyntheticEvent<MouseEvent | KeyboardEvent> | MouseEvent,
    id: string
  ) => void;

  /**
   * When true, the switch will no longer be interactive and its colors will be greyed out.
   */
  disabled?: boolean;

  /**
   * The switch will take on this color when it is **not** checked. Only accepts 3 or 6 digit hex colors, e.g., #888, #45abcd.
   *
   * Defaults to #888.
   */
  offColor?: string;

  /** The switch will take on this color when it is checked. Only accepts 3 or 6 digit hex colors, e.g., #080, #45abcd.
   *
   * Defaults to #080.
   */
  onColor?: string;

  /**
   * The color of the handle of the switch when **not** checked. Only accepts 3 or 6 digit hex colors, e.g., #fff, #45abcd.
   *
   * Defaults to #fff.
   */
  offHandleColor?: string;

  /**
   * The color of the handle of the switch when checked. Only accepts 3 or 6 digit hex colors, e.g., #fff, #45abcd.
   *
   * Defaults to #fff.
   */
  onHandleColor?: string;

  /**
   * The diameter of the handle, measured in pixels. By default it will be slightly smaller than the height of the switch.
   *
   * Defaults to undefined.
   */
  handleDiameter?: number;

  /**
   * Icon to display on the handle while switch is unchecked.
   *
   * Defaults to undefined.
   */
  uncheckedHandleIcon?: JSX.Element;

  /**
   * Icon to display on the handle while switch is checked.
   *
   * Defaults to undefined.
   */
  checkedHandleIcon?: JSX.Element;

  /**
   * An icon that will be shown on the switch when it is **not** checked. Set to false to show no icon.
   *
   * Defaults to an x icon.
   */
  uncheckedIcon?: JSX.Element | boolean;

  /**
   * An icon that will be shown on the switch when it is checked. Set to false to show no icon.
   *
   * Defaults to a checked icon.
   */
  checkedIcon?: JSX.Element | boolean;

  /**
   * The box-shadow of the handle of the switch.
   *
   * Defaults to undefined.
   * */
  boxShadow?: string;

  /** The box-shadow of the handle of the switch when it is active or focused. **Do not set this to null as it is important for accessibility.**
   *
   * Defaults to '0px 0px 2px 3px #33bbff'.
   */
  activeBoxShadow?: string;

  /**
   * The height of the background of the switch, measured in pixels.
   *
   * Defaults to 28.
   */
  height?: number;

  /**
   * The width of the background of the switch, measured in pixels.
   *
   * Defaults to 56.
   */
  width?: number;

  /**
   * Border radius of the switch _and_ the handle.
   *
   * Defaults to undefined.
   */
  borderRadius?: number;

  /**
   * The className of the outer shell of the switch.
   *
   * Defaults to undefined.
   */
  className?: string;

  /**
   * The id of the embedded checkbox.
   *
   * Defaults to undefined.
   */
  id?: string;
  
   /**
   * The borderStyle of switch.
   *
   * Defaults to solid.
   */
  borderStyle,

   /**
   * The borderWidth of switch.
   *
   * Defaults to 1.
   */
  borderWidth,

   /**
   * The borderColor of switch. Only accepts 3 or 6 digit hex colors, e.g., #080, #45abcd.
   *
   * Defaults to #FFF.
   */
  borderColor,

}

type Omit<T, U> = Pick<T, Exclude<keyof T, U>>;

type htmlInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
type excludedHTMLInputProps =
  | "onFocus"
  | "onBlur"
  | "onKeyUp"
  | "onChange"
  | "ref"
  | keyof ReactSwitchProps;

type allowedHTMLinputProps = Omit<htmlInputProps, excludedHTMLInputProps>;

declare class ReactSwitch extends React.Component<
  ReactSwitchProps & allowedHTMLinputProps
> {}

export default ReactSwitch;
