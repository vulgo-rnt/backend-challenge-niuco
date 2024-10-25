import convertUnixToIso from "./convertUnixToIso";

describe("convertUnixToIso", () => {
  it("return correct", () => {
    expect(convertUnixToIso(1649179152)).toBe("2022-04-05T17:19:12.000Z");
  });
  it("unix invalid", () => {
    expect(() => convertUnixToIso(-1121321)).toThrow(new Error("Unix invalid"));
  });
});
