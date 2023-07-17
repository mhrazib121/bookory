import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Page/login";
import NotFound from "../Page/NotFound";
import Home from "../Page/home";
import AddNewBook from "../Page/AddBook";
import Book from "../Page/Book";
import EditBook from "../Page/EditBook";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "add-book",
        element: <AddNewBook />,
      },
      {
        path: "book/:id",
        element: <Book />,
      },
      {
        path: "edit-book/:id",
        element: <EditBook />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
