import { createBrowserRouter } from "react-router";
import MainLayout from "./MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import RegisterPage from "../Pages/RegisterPage";
import LoginPage from "../Pages/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },

      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/registerPage",
        Component: RegisterPage,
      },
      {
        path: "/loginPage",
        Component: LoginPage,
      },
    ],
  },
]);
