import React from "react";
import {createBrowserRouter} from "react-router-dom";

import Home from "../views/layouts/home/index.tsx";
import MainLayout from "../views/layouts/mainLayout/index.tsx";

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
]);

export default router;