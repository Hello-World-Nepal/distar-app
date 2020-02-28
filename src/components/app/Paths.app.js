// ALL ROUTES, PATH AND RESTRICTION ARE ADDED HERE

// ROUTES
import LoginPage from "../loginPage/LoginPage";
import SigninPage from "../signinPage/SigninPage";
import DashboardPage from "../dashboardPage/DashboardPage";
import DashboardDetailsPage from "../dashboardDetailsPage/DashboardDetailsPage";
import HomePage from "../homePage/HomePage";

// PUBLIC PATHS => THESE ARE ACCESSIBLE WITHOUT LOGIN
// PUBLIC PATHS HAS restricted key => IF TRUE THEY CANNOT BE ACCESSED WITH LOGGED USER
export const PUBLIC_PATHS = [
  {
    name: "Login",
    path: "/log-in",
    component: LoginPage,
    exact: true,
    restricted: true,
    visible: true
  }, 
  {
    name: "Signin",
    path: "/sign-in",
    component: SigninPage,
    exact: true,
    restricted: true,
    visible: true
  }
];

// PUBLIC PATHS => THESE ARE NOT ACCESSIBLE WITHOUT LOGIN
export const PRIVATE_PATHS = [
  {
    name: "Home",
    path: "/home",
    exact: true,
    component: HomePage,
    visible: true
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    exact: true,
    component: DashboardPage,
    visible: true
  },
  {
    name: "Dashboard Details",
    path: "/dashboard/:id",
    exact: true,
    component: DashboardDetailsPage,
    visible: false
  }
];