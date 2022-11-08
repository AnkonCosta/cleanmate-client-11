import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Routes/Routes";

function App() {
  return (
    <div className="background-img  pb-12 ">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
