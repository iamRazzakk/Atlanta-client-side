
import { createBrowserRouter } from 'react-router-dom';
import Main from './Main/Main';
import Error from './Error/Error';
import Home from './Home/Home';




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

        ]
    },
])

export default myCreatedRouter;