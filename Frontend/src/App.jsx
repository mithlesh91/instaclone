import React from 'react'
import { RouterProvider } from 'react-router-dom'
import {router} from './app.router'
import './features/share/style/globle.scss'
import { ContextProvider } from './features/Auth.context'
const App = () => {
  return (
    <ContextProvider>
    <RouterProvider router={router}/>

    </ContextProvider>
  )
}

export default App
