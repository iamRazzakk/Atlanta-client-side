
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
                element: <CreateBlog></CreateBlog>
            },
            {
                path: 'login',
                element: <SingIn></SingIn>
            },
            {
                path: 'singup',
                element: <SingUp></SingUp>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'dashboard/profile',
                element: <UserProfile></UserProfile>
            },
            {
                path: 'dashboard/my-post',
                element: <MyPost></MyPost>
            },
        ]
    }
])

export default myCreatedRouter;