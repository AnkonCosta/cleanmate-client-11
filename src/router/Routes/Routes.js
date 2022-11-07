import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import AllServices from "../../Pages/AllServices/AllServices";
import ServiceDetails from "../../Pages/AllServices/ServiceDetails";
import Home from "../../Pages/Home/Home/Home";

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
]);

export default router;
