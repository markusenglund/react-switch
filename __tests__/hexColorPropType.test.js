import hexColorPropType from "../src/hexColorPropType";

describe("hexColorPropType()", () => {
  it("returns null when passed correct color", () => {
    expect(
      hexColorPropType({ onColor: "#abcdef" }, "onColor", "ReactSwitch")
    ).toBeNull();
  });
  it("returns error when passed plain text color", () => {
    expect(
      hexColorPropType({ offColor: "blue" }, "offColor", "ReactSwitch")
    ).toMatchSnapshot();
  });
  it("returns error when passed non string", () => {
    expect(
      hexColorPropType({ onHandleColor: ["#", "0", "0", "0"] })
    ).toMatchSnapshot();
  });
  it("returns error when passed 8-digit hex-color", () => {
    expect(
      hexColorPropType(
        { offHandleColor: "#11223344" },
        "offHandleColor",
        "ReactSwitch"
      )
    ).toMatchSnapshot();
  });
});
