import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import AddServices from "../../Pages/AddServices/AddServices";
import AllServices from "../../Pages/AllServices/AllServices";
import ServiceDetails from "../../Pages/AllServices/ServiceDetails";
import FourOFour from "../../Pages/FourOFour/FourOFour";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
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
        path: "/register",
        element: <Register></Register>,
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
        loader: () => fetch("http://localhost:5000/services"),
        element: <AllServices></AllServices>,
      },
      {
        path: "/services/:id",
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/services/${params.id}`);
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
