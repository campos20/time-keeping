import { createBrowserRouter, RouterProvider } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { TimeEntryPage } from "./pages/TimeEntryPage";
import { appRoutes } from "./config/appRoutes";
import { UserCreateEditPage } from "./pages/UserCreateEditPage";
import { LoginPage } from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: appRoutes.root,
    Component: LandingPage,
  },
  {
    path: appRoutes.timeEntry,
    Component: TimeEntryPage,
  },
  {
    path: appRoutes.usersNew,
    Component: UserCreateEditPage,
  },
  {
    path: appRoutes.login,
    Component: LoginPage,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
