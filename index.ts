import getUsers from "./commons/getUsers";
import { formattedUser } from "./commons/formattedUser";
import { User } from "./types/user";
import "dotenv/config";

(async () => {
  const data = await getUsers();
  data.forEach((user: User) => {
    console.log(formattedUser(user));
  });
})();
