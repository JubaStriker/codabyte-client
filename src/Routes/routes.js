import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Courses from "../Layout/Pages/Courses";
import Home from "../Layout/Pages/Home";
import Login from "../Layout/Pages/Login/Login";
import Signup from "../Layout/Pages/Login/Signup";

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
            path: 'courses',
            element: <Courses />
        }

        ]

    }
])