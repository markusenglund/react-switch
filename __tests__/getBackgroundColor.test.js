import getBackgroundColor from "../src/getBackgroundColor";

describe("getBackgroundColor()", () => {
  it("returns onColor when pos === checkedPos", () => {
    expect(getBackgroundColor(12, 12, 2, "#aabbcc", "#ddeeff")).toBe("#ddeeff");
  });
  it("returns offColor when pos === 1", () => {
    expect(getBackgroundColor(1, 11, 1, "#aabbcc", "#ddeeff")).toBe("#aabbcc");
  });
  it("returns the average when handle is in the middle", () => {
    expect(getBackgroundColor(6, 11, 1, "#fefe00", "#00000e")).toBe("#7f7f07");
  });
  it("works with one 3-digit hex-color", () => {
    expect(getBackgroundColor(6, 11, 1, "#000", "#eeeeee")).toBe("#777777");
  });
});
