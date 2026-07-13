import { createBrowserRouter } from 'react-router-dom'
import Loing from './features/auth/pages/Loing'
import Register from './features/auth/pages/Register'

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
        element:<h1>Home</h1>
    }

])