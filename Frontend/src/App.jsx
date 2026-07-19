import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './app.router'
import './features/share/style/globle.scss'
import { ContextProvider } from './features/Auth.context'
import { PostContexProvider } from './features/posts/PostContext'
const App = () => {
  return (
    <ContextProvider>
      <PostContexProvider>
        <RouterProvider router={router} />
      </PostContexProvider>
    </ContextProvider>
  )
}

export default App
