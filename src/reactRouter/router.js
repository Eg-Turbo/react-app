import Home from "../components/Home"
import Products from "../components/Products"
import Details from "../components/Details"
import Cart from "../components/Cart"
import { createBrowserRouter } from "react-router-dom"
export let router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Home />
          <Products />
        </>
      ),
    },
    {
      path: "/details/:productid",
      element: <Details />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
  ]);
