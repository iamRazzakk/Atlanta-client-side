
import { createBrowserRouter } from 'react-router-dom';
import Main from './Main/Main';
import Error from './Error/Error';
import Home from './Home/Home';
import SingIn from './UsersRegisterAndLogin/SingIn';
import SingUp from './UsersRegisterAndLogin/Singup';




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
                path: 'login',
                element: <SingIn></SingIn>
            },
            {
                path: 'singup',
                element: <SingUp></SingUp>
            }
        ]
    }
])

export default myCreatedRouter;