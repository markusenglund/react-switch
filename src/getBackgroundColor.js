function createBackgroundColor(
  pos,
  checkedPos,
  uncheckedPos,
  offColor,
  onColor
) {
  const relativePos = (pos - uncheckedPos) / (checkedPos - uncheckedPos);
  if (relativePos === 0) {
    return offColor;
  }
  if (relativePos === 1) {
    return onColor;
  }

  let newColor = "#";
  for (let i = 1; i < 8; i += 2) {
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
  if (color.length === 9) {
    return color;
  }
  if (color.length === 7) {
    return color + 'FF';
  }
  let sixDigitColor = "#";
  for (let i = 1; i < 4; i += 1) {
    sixDigitColor += color[i] + color[i];
  }
  return sixDigitColor + 'FF';
}

export default function getBackgroundColor(
  pos,
  checkedPos,
  uncheckedPos,
  offColor,
  onColor
) {
  const eightDigitOffColor = convertShorthandColor(offColor);
  const eightDigitOnColor = convertShorthandColor(onColor);
  return createBackgroundColor(
    pos,
    checkedPos,
    uncheckedPos,
    eightDigitOffColor,
    eightDigitOnColor
  );
}
