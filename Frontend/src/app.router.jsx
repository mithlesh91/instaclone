import { createBrowserRouter } from 'react-router-dom'
import Loing from './features/auth/pages/Loing'
import Register from './features/auth/pages/Register'
import Feed from './features/posts/Page/Feed'
import Posts from './features/posts/Component/Posts'

export const router = createBrowserRouter([
    {
        path: '/Login',
        element:<Loing />
    },
    {
        path: '/register',
        element:<Register />
    },
    {
        path: '/',
        element:<Feed />
    },
    {
        path:"/post",
        element:<Posts/>
    }

])