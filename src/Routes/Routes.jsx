import { createBrowserRouter } from "react-router-dom";
import Route from "../Layouts/Route";
import Home from "../Pages/Home/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Route />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
export default routes;
