import { createBrowserRouter } from 'react-router-dom'
import Loing from './features/auth/pages/Loing'
import Register from './features/auth/pages/Register'
import Feed from './features/posts/Page/Feed'
import Posts from './features/posts/Component/Posts'
import ProtectedRoute from './features/posts/Component/ProtectedRoute'

export const router = createBrowserRouter([
    {
        path: '/login',
        element:<Loing />
    },
    {
        path: '/register',
        element:<Register />
    },
    {
        path: '/',
        element:(
            <ProtectedRoute>
                <Feed/>
            </ProtectedRoute>
        )
    },
    {
        path:"/post",
        element:(
            <ProtectedRoute>
                <Posts/>
            </ProtectedRoute>
        )
    }

])