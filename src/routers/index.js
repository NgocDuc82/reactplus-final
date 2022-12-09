import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/home/index";
import Registration from "../pages/registration/index";
import Login from "../pages/login/index";
import Dashbroard from "../pages/dashboard/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: '/dashbroard',
    element: <Dashbroard />,
  },
]);
