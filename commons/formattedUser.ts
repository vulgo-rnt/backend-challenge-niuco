import convertUnixToIso from "./convertUnixToIso";
import emailBlur from "./emailBlur";
import checkPayer from "./checkPayer";
import { User } from "../types/user";

export const formattedUser = (user: User) => {
  try {
    const email = emailBlur(user.email);
    const date = convertUnixToIso(user.last_activity);
    const { payer, active } = checkPayer(user.status, user.role);

    const res = {
      id: user.id,
      name: user.name,
      email,
      date,
      payer,
      active,
    };
    return res;
  } catch (err) {
    throw err;
  }
};
