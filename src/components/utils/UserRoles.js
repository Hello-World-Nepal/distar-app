// ALL ROLES FOR THE USER GOES HERE
export const USER_ROLES = {
  admin: {
    access: ["/", "/log-in", "/sign-in", "/dashboard", "/home"]
  },
  user: {
    access: ["/", "/log-in", "/sign-in"]
  }
};

export const ROLE_ADMIN = "admin";
export const ROLE_USER = "user";