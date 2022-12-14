import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import AddServices from "../../Pages/AddServices/AddServices";
import AllServices from "../../Pages/AllServices/AllServices";
import ServiceDetails from "../../Pages/AllServices/ServiceDetails";
import Blog from "../../Pages/Blog/Blog";
import FourOFour from "../../Pages/FourOFour/FourOFour";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Update from "../../Pages/MyReviews/Update";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(
            `https://service-review-server-blush.vercel.app/reviews/${params.id}`
          ),
      },
      {
        path: "/add",
        element: (
          <PrivateRoute>
            <AddServices></AddServices>
          </PrivateRoute>
        ),
      },
      {
        path: "/reviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/services",
        element: <AllServices></AllServices>,
      },
      {
        path: "/services/:id",
        loader: ({ params }) => {
          return fetch(
            `https://service-review-server-blush.vercel.app/services/${params.id}`
          );
        },
        element: <ServiceDetails></ServiceDetails>,
      },
    ],
  },
  {
    path: "/*",
    element: <FourOFour></FourOFour>,
  },
]);

export default router;
