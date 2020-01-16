import hexColorPropType from "./hexColorPropType";

const hexColorAcceptDefaultPropType = (props, propName, componentName) => {
  if (props[propName] === "default") return null;
  return hexColorPropType(props, propName, componentName);
};

export default hexColorAcceptDefaultPropType;
