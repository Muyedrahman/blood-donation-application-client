import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute";
import DonationRequests from "../pages/donationRequests/DonationRequests";
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
        path: "funding",
        element: (
          <PrivateRoute>
            <Funding />
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,

        // District + Upazila দ
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
]);

// import { createBrowserRouter } from "react-router";
// import RootLayout from "../layout/RootLayout";
// import Home from "../pages/Home/Home/Home";
// import AuthLayout from "../layout/AuthLayout";
// import Login from "../pages/Auth/Login/Login";
// import Register from "../pages/Auth/Register/Register";
// import PrivateRoute from "./PrivateRoute";
// import DonationRequests from "../pages/donationRequests/DonationRequests";
// import Funding from "../pages/Funding/Funding";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: RootLayout,
//     children: [
//       {
//         index: true,
//         Component: Home,
//       },
//       {
//         path: "donation-requests",
//         element: <DonationRequests />
//       },
//       {
//         path: "funding",
//         element:
//         <PrivateRoute>
//           <Funding/>
//         </PrivateRoute>
//       },
//       {
//         path: "login",
//         Component: Login,
//       },
//       {
//         path: "register",
//         Component: Register,
//         loader: () => fetch('/public/districts.json').then(res => res.json())
//       },
//     ],
//   },
//   // {
//   //   path: "/dashboard",
//   //   element:  ,
//   //   children: [],
//   // },
// ]);
