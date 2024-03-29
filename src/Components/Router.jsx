
import { createBrowserRouter } from 'react-router-dom';
import Main from './Main/Main';
import Error from './Error/Error';
import Home from './Home/Home';
import SingIn from './UsersRegisterAndLogin/SingIn';
import SingUp from './UsersRegisterAndLogin/Singup';
import CreateBlog from './CreateBlog/CreateBlog';
import Dashboard from './Dashboard/Dashboard';
import UserProfile from './Dashboard/UserProfile';
import MyPost from './Dashboard/MyPost';
import BlogDetail from './BlogDetail/BlogDetail';
import PrivateRoute from './UsersRegisterAndLogin/PrivateRoute';
import UpdateData from './Dashboard/UpdateData';




const myCreatedRouter = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog-add',
                element: <PrivateRoute><CreateBlog></CreateBlog></PrivateRoute>
            },
            {
                path: 'login',
                element: <SingIn></SingIn>
            },
            {
                path: 'singup',
                element: <SingUp></SingUp>
            },
            {
                path: '/blog/:id',
                element: <PrivateRoute><BlogDetail></BlogDetail></PrivateRoute>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'dashboard/profile',
                element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
            },
            {
                path: 'dashboard/my-post',
                element: <PrivateRoute><MyPost></MyPost></PrivateRoute>
            },

        ]
    },
    {
        path: '/blogs/:id',
        element: <UpdateData></UpdateData>
    }
])

export default myCreatedRouter;