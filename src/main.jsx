import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { router } from "./Components/Routes.jsx";
import { RouterProvider } from "react-router";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./Components/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </AuthProvider>
  </StrictMode>
);
