import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute";
import DonationRequests from "../pages/donationRequests/DonationRequests";

import DashboardLayout from "../layout/DashboardLayout";
import DonorDashboardHome from "../pages/Dashboard/Donor/DonorDashboardHome";
import Funding from "../pages/Funding/Funding";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "donation-requests",
        element: <DonationRequests />,
      },

      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,

        // District + Upazila
        loader: async () => {
          const districts = await fetch("/public/districts.json").then((res) =>
            res.json()
          );
          const upazilas = await fetch("/public/upazilas.json").then((res) =>
            res.json()
          );
          return { districts, upazilas };
        },
      },
    ],
  },
  // dashboard
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <DonorDashboardHome />,
      },
      {
        path: "funding",
        element: <Funding />,
      },
    ],
  },
]);
