function createBackgroundColor(
  pos,
  checkedPos,
  uncheckedPos,
  offColor,
  onColor,
  isHover,
  onHoverColor,
  offHoverColor
) {
  const relativePos = (pos - uncheckedPos) / (checkedPos - uncheckedPos);
  if (relativePos === 0) {
    if (isHover) {
      return offHoverColor;
    }
    return offColor;
  }
  if (relativePos === 1) {
    if (isHover) {
      return onHoverColor;
    }
    return onColor;
  }

  let newColor = "#";
  for (let i = 1; i < 6; i += 2) {
    const offComponent = parseInt(offColor.substr(i, 2), 16);
    const onComponent = parseInt(onColor.substr(i, 2), 16);
    const weightedValue = Math.round(
      (1 - relativePos) * offComponent + relativePos * onComponent
    );
    let newComponent = weightedValue.toString(16);
    if (newComponent.length === 1) {
      newComponent = `0${newComponent}`;
    }
    newColor += newComponent;
  }
  return newColor;
}

function convertShorthandColor(color) {
  if (color.length === 7) {
    return color;
  }
  let sixDigitColor = "#";
  for (let i = 1; i < 4; i += 1) {
    sixDigitColor += color[i] + color[i];
  }
  return sixDigitColor;
}

export default function getBackgroundColor(
  pos,
  checkedPos,
  uncheckedPos,
  offColor,
  onColor,
  isHover,
  onHoverColor,
  offHoverColor
) {
  const sixDigitOffColor = convertShorthandColor(offColor);
  const sixDigitOnColor = convertShorthandColor(onColor);
  const sixDigitOnHoverColor = convertShorthandColor(onHoverColor);
  const sixDigitOffHoverColor = convertShorthandColor(offHoverColor);

  return createBackgroundColor(
    pos,
    checkedPos,
    uncheckedPos,
    sixDigitOffColor,
    sixDigitOnColor,
    isHover,
    sixDigitOnHoverColor,
    sixDigitOffHoverColor
  );
}
