import { createBrowserRouter } from "react-router";
import MainLayout from "./MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import RegisterPage from "../Pages/RegisterPage";
import LoginPage from "../Pages/LoginPage";
import FoodDetails from "./FoodDetails";
import AllReviews from "./AllReviews";
import ProtectedRoute from "./ProtectedRouter";
import AddReview from "./AddReview";

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
        path: "/allReviews",
        Component: AllReviews,
      },

      {
        path: "/add-review",
        element: (
          <ProtectedRoute>
            <AddReview></AddReview>
          </ProtectedRoute>
        ),
      },
      {
        path: "/registerPage",
        Component: RegisterPage,
      },
      {
        path: "/loginPage",
        Component: LoginPage,
      },
      {
        path: "/latest-foods/:id",
        Component: FoodDetails,
      },
    ],
  },
]);
