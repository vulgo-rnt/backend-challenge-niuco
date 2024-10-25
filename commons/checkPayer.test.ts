import checkPayer from "./checkPayer";

describe("checkPayer", () => {
  it("user disabled", () => {
    expect(checkPayer("disabled", "editor")).toStrictEqual({
      payer: false,
      active: false,
    });
  });
  it("not payer", () => {
    expect(checkPayer("enabled", "viewer")).toStrictEqual({
      payer: false,
      active: true,
    });
    expect(checkPayer("enabled", "system")).toStrictEqual({
      payer: false,
      active: true,
    });
  });
  it("payer", () => {
    expect(checkPayer("enabled", "admin")).toStrictEqual({
      payer: true,
      active: true,
    });
    expect(checkPayer("enabled", "editor")).toStrictEqual({
      payer: true,
      active: true,
    });
  });
});
