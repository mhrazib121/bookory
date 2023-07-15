import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Page/login";
import NotFound from "../Page/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
