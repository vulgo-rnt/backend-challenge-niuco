import { User } from "../types/user";
import { formattedUser } from "./formattedUser";

describe("formattedUser", () => {
  const data = {
    id: "0373e634-2d03-457e-a24d-2b0c8c3b7c37",
    name: "John Connor",
    email: "john.connor@niuco.com.br",
    status: "enabled",
    role: "admin",
    last_activity: 1649179152,
  } as User;

  it("return correct", () => {
    expect(formattedUser(data)).toStrictEqual({
      id: "0373e634-2d03-457e-a24d-2b0c8c3b7c37",
      name: "John Connor",
      email: "john.connor@niuco.com.br",
      date: "2022-04-05T17:19:12.000Z",
      payer: true,
      active: true,
    });
  });
  it("return incorrect", () => {
    expect(() =>
      formattedUser({
        ...data,
        email: "dsagsayhdvgasuyd",
      })
    ).toThrow(new Error("Email invalid"));
  });
});
