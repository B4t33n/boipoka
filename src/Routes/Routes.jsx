import { createBrowserRouter } from "react-router";

import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import About from "../components/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
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
