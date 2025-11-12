import { createBrowserRouter } from "react-router";
import MainLayout from "./MainLayout";
import Home from "../Pages/Home";

import RegisterPage from "../Pages/RegisterPage";
import LoginPage from "../Pages/LoginPage";
import FoodDetails from "./FoodDetails";
import AllReviews from "./AllReviews";
import ProtectedRoute from "./ProtectedRouter";
import AddReview from "./AddReview";
import MyReviews from "./MyReviews";
import EditReview from "./EditReview";
import NotFound from "./NotFound";
import MyFavorites from "./MyFavorites";
import Vegetarian from "./Vegetarian";

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
        path: "/my-reviews",
        element: (
          <ProtectedRoute>
            <MyReviews></MyReviews>
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

      {
        path: "/edit-review/:id",
        element: (
          <ProtectedRoute>
            <EditReview></EditReview>
          </ProtectedRoute>
        ),
      },

      {
        path: "*",
        element: <NotFound></NotFound>,
      },
      {
        path: "/my-favorites",
        Component: MyFavorites,
      },
    ],
  },
]);
