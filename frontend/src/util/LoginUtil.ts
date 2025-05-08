import { UserDto } from "../model/UserDto";
import { LS_LOGGED_USER, LS_USERS } from "./LocalStorageUtil";

export const getLoggedUser = () => {
  try {
    const loggedUserName = JSON.parse(
      localStorage.getItem(LS_LOGGED_USER) || ""
    );

    const users: UserDto[] = JSON.parse(localStorage.getItem(LS_USERS) || "[]");

    const loggedUser = users.find(
      (u: UserDto) => u.username === loggedUserName
    );
    return loggedUser;
  } catch (error) {
    return null;
  }
};
