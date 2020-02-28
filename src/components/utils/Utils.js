import { ROLE_ADMIN, ROLE_USER } from "./UserRoles";

// ALL UTILITIES FUNCTIONS GOES HERE
export const isLoggedIn = () => {
  // CHECK DATABASE FOR LOGGED USER WITH COOKIES / LOCAL STORAGE
  return false;
}

export const getUserRole = () => {
  // GET USER ROLE FROM COOKIES / LOCAL STORAGE
  const ROLE = ROLE_ADMIN;

  return ROLE;
}

// EXPORT OTHER UTILS
export { PublicLink, PrivateLink } from "./Links";
export { USER_ROLES, ROLE_ADMIN, ROLE_USER } from "./UserRoles";