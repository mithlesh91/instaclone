import React from 'react'
import { RouterProvider } from 'react-router-dom'
import {router} from './app.router'
import './features/share/style/globle.scss'
const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
