import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "./Layout/DashboardLayout.jsx";
import Login from "./Layout/DashboardLayout.jsx";
import Officials from "./pages/officials/Officials";
import TicketPage from "./pages/ticketpage/TicketPage";
import SignUp from "./Layout/Signup.jsx";
import LandingPage from "./Landing/LandingPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",

    children: [
      {
        index: true,
        element: <LandingPage />,
      },

      {
        path: "/signup",
        element: <SignUp />,
      },

      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/ticket",
        element: <TicketPage />,
      },

      {
        path: "/Officials",
        element: <Officials />,
      },

      {
        path: "/DashboardLayout",
        element: <DashboardLayout />,
      },

      {
        path: "/ticket/:id",
        element: <TicketPage />,
      },
      {
        path: "*",
        element: "Sorry, page cannot be found",
      },
    ],
  },
]);

export default router;
