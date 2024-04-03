import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import PageNotFound from "../pages/PageNotFound";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
