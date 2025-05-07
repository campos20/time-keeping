import { createBrowserRouter, RouterProvider } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { TimeEntryPage } from "./pages/TimeEntryPage";
import { appRoutes } from "./config/appRoutes";

const router = createBrowserRouter([
  {
    path: appRoutes.root,
    Component: LandingPage,
  },
  {
    path: appRoutes.timeEntry,
    Component: TimeEntryPage,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
