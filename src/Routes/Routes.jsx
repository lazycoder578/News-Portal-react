import { createBrowserRouter } from "react-router-dom";
import Route from "../Layouts/Route";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import News from "../Pages/News/News";
import PrivateRoutes from "./PrivateRoutes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Route />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('/news.json')
      },
      {
        path: '/news/:id',
        element: <PrivateRoutes><News /></PrivateRoutes>
      },
      {
        path: "/login",
        element: <LogIn/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
    ],
  },
]);
export default routes;
