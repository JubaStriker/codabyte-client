import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Layout/Pages/Blog";
import CourseDetails from "../Layout/Pages/CourseDetails";
import Courses from "../Layout/Pages/Courses";
import ErrorPage from "../Layout/Pages/ErrorPage";
import Home from "../Layout/Pages/Home";
import Login from "../Layout/Pages/Login/Login";
import Signup from "../Layout/Pages/Login/Signup";
import Premium from "../Layout/Pages/Premium";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        loader: () => fetch('https://coda-byte-server.vercel.app/courses'),
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [{
            path: '/',
            element: <Home />
        },
        {
            path: '/home',
            element: <Home />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/signup',
            element: <Signup />
        },
        {
            path: '/courses',
            loader: () => fetch('https://coda-byte-server.vercel.app/courses'),
            element: <Courses />
        },
        {
            path: '/courses/:id',
            loader: ({ params }) => fetch(`https://coda-byte-server.vercel.app/details/${params.id}`),
            element: <CourseDetails />
        },
        {
            path: '/checkout/:id',
            loader: ({ params }) => fetch(`https://coda-byte-server.vercel.app/details/${params.id}`),
            element: <PrivateRoute><Premium /></PrivateRoute>
        },
        {
            path: '/blog',
            element: <Blog />
        }

        ]

    }
])