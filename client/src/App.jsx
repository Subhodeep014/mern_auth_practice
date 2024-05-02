import { useState } from 'react'
import './App.css'
// import SignUpSignIn from './pages/LoginForm'
import LoginForm from './pages/LoginForm'
import SignUpForm from './pages/SignUpForm'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Navbar from './components/Navbar'
import NavrbarOutlet from './components/NavbarOutlet'

function App() {
  const router = createBrowserRouter([
    {
      path : "/",
      element: <NavrbarOutlet/>,
      children: [
        {
          path:"/home",
          element: <div>Home</div>
        },
        {
          path:"/signin",
          element: <LoginForm/>
        },
        {
          path:"/signup",
          element: <SignUpForm/>
        }
      ]
    },
    
  ])
  return (
    <>
    <RouterProvider router={router}/>
    {/* <SignUpForm/> */}
    </>
  )
}

export default App
