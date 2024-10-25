import emailBlur from "./emailBlur";

describe("emailBlur", () => {
  it("return with blur", () => {
    expect(emailBlur("patrick.estrela@hotmail.com")).toBe(
      "pa***********la@hotmail.com"
    );
  });
  it("return with domain niuco", () => {
    expect(emailBlur("robot@niuco.com.br")).toBe("robot@niuco.com.br");
  });
  it("email invalid", () => {
    expect(() => emailBlur("bnsadlubsaldbas")).toThrow(
      new Error("Email invalid")
    );
  });
});
