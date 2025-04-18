import { createBrowserRouter } from "react-router";

import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Error from "../components/Error/Error";
import BookDetails from "../components/BookDetails/BookDetails";

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
      {
        path:"/bookDetails/:Id",
        loader: () => fetch("booksData.json"),
        Component: BookDetails
      }
    ],
  },
]);

export default router;
