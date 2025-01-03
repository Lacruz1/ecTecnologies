import React from "react";
import {createBrowserRouter} from "react-router-dom";

import Home from "../views/layouts/home/index.tsx";
import MainLayout from "../views/layouts/mainLayout/index.tsx";
import Login from "../views/login/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout children={<Home />} />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      
    ],
  },
  {
    path: "/login",
    element: <MainLayout children={<Login />} />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      
    ],
  },
]);

export default router;