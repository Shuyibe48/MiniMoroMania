import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ContactPage from "../pages/ContactPage";
import AllToy from "../pages/AllToy";
import MyToy from "../pages/MyToy";
import AddToy from "../pages/AddToy";
import ToyDetails from "../pages/ToyDetails";
import PrivateRoute from "../private/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'blog',
                element: <Blog />
            },
            {
                path: 'alltoy',
                element: <AllToy />
            },
            {
                path: 'mytoy',
                element: <PrivateRoute><MyToy /></PrivateRoute>
            },
            {
                path: 'addtoy',
                element: <PrivateRoute><AddToy /></PrivateRoute>
            },
            {
                path: 'toydetails',
                element: <PrivateRoute><ToyDetails /></PrivateRoute>
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'contact',
                element: <ContactPage />
            }
        ]
    },
]);

export default router
