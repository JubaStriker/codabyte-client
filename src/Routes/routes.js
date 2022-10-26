import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CourseDetails from "../Layout/Pages/CourseDetails";
import Courses from "../Layout/Pages/Courses";
import Home from "../Layout/Pages/Home";
import Login from "../Layout/Pages/Login/Login";
import Signup from "../Layout/Pages/Login/Signup";
import Premium from "../Layout/Pages/Premium";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
            element: <Premium />
        }

        ]

    }
])