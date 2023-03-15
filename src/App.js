import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import { router } from "./reactRouter/router";
import { RouterProvider } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";
function App() {
  return (
    <>
      <SkeletonTheme>
        <Navbar />
        <RouterProvider router={router}>
          <Home />
          <Products />
        </RouterProvider>
      </SkeletonTheme>
    </>
  );
}

export default App;
