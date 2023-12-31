import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ContactPage from "../components/ContactPage";
import AllToy from "../pages/AllToy";
import MyToy from "../pages/MyToy";
import AddToy from "../pages/AddToy";
import ToyDetails from "../pages/ToyDetails";
import PrivateRoute from "../private/PrivateRoute";
import UpdateToys from "../pages/UpdateToys";


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
                element: <AllToy />,
                loader: () => fetch('https://mini-motor-mania-server.vercel.app/totalToys')
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
                path: 'toydetails/:id',
                element: <PrivateRoute><ToyDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://mini-motor-mania-server.vercel.app/toys/${params.id}`)
            },
            {
                path: 'updatetoys/:id',
                element: <UpdateToys />,
                loader: ({ params }) => fetch(`https://mini-motor-mania-server.vercel.app/toys/${params.id}`)
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    },
]);

export default router
