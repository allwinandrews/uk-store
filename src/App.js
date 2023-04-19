import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import "./App.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/elegant-icons.css";
import "./assets/css/nice-select.css";
import "./assets/css/slicknav.min.css";
import "./assets/css/style.css";
// import "./assets/css/jquery-ui.min.css";
// import "./assets/css/owl.carousel.min.css";

import Loader from "./components/Loader";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Grid from "./pages/Grid";
import Details from "./pages/Details";
import Contact from "./pages/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "checkout",
      element: <Checkout />,
    },
    {
      path: "cart",
      element: <Cart />,
    },
    {
      path: "grid",
      element: <Grid />,
    },
    {
      path: "details",
      element: <Details />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
