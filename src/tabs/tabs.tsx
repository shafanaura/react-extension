import React from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const Tabs = () => {
  return (
    <>
      <a href="#/">home</a>
      <a href="#/about">about</a>
      <RouterProvider router={router} />
    </>
  );
};

export default Tabs;
