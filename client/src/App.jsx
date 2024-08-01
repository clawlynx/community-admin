import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomeLayout from "./pages/HomeLayout";
import ErrorPage from "./pages/Error/ErrorPage";
import AuthLayout from "./pages/auth/AuthLayout";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import LandingPage from "./pages/Landing/LandingPage";
import AllUsers from "./pages/allUsers/AllUsers";
import JobPortal from "./pages/job-portal/JobPortal";
import StudyAbroad from "./pages/study-abroad/StudyAbroad";
import Ecommerce from "./pages/e-commerce/Ecommerce";
import DatingPage from "./pages/dating/DatingPage";
import Matrimony from "./pages/matrimony/Matrimony";
import Settings from "./pages/settings/Settings";
import Candidates from "./pages/job-portal/CandidatesPage/Candidates";
import Jobs from "./pages/job-portal/jobsPage/Jobs";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        {
          path: "all-users",
          element: <AllUsers />,
        },
        {
          path: "job-portal",
          element: <JobPortal />,
        },
        {
          path: "job-portal/candidates",
          element: <Candidates />,
        },
        {
          path: "job-portal/jobs",
          element: <Jobs />,
        },
        {
          path: "study-abroad",
          element: <StudyAbroad />,
        },
        {
          path: "e-commerce",
          element: <Ecommerce />,
        },
        {
          path: "dating",
          element: <DatingPage />,
        },
        {
          path: "matrimony",
          element: <Matrimony />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
