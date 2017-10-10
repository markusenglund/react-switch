export default function getBackgroundColor(pos, checkedPos, offColor, onColor) {
  const relativePos = (pos - 1) / (checkedPos - 1);
  // if (relativePos < 0.5) {
  //   return offColor;
  // }
  return '#bada77';
}
