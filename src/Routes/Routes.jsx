import { createBrowserRouter } from "react-router";

import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Error from "../components/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        loader: () => fetch("booksData.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
    ],
  },
]);

export default router;
