// Make sure color props are strings that start with "#" since other ways to write colors are not supported.
const hexColorPropType = (props, propName, componentName) => {
  const prop = props[propName];
  if (
    typeof prop !== "string" ||
    prop[0] !== "#" ||
    (prop.length !== 4 && prop.length !== 7)
  ) {
    return new Error(
      `Invalid prop '${propName}' supplied to '${componentName}'. '${propName}' has to be either a 3-digit or 6-digit hex-color string. Valid examples: '#abc', '#123456'`
    );
  }
  return null;
};

export default hexColorPropType;
