import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CommandCenter, Login, VehicleRegister } from "./pages";
import "./index.css";
import { VehicleSearch } from "./pages/VehicleSearch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/actions",
    element: <CommandCenter />,
  },
  {
    path: "/register-vehicle",
    element: <VehicleRegister />,
  },
  {
    path: "/search-vehicle",
    element: <VehicleSearch />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
