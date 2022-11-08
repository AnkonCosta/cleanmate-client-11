import "./App.css";
import { RouterProvider, useLocation } from "react-router-dom";
import router from "./router/Routes/Routes";
import { useEffect } from "react";

function App() {
  return (
    <div className="background-img  pb-12 ">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
