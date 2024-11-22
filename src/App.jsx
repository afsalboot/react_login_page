import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

function App() {

  const page = createBrowserRouter([
    {
      path: "/",
      element: <SignupPage/>
    },
    {
      path: "/loginpage",
      element: <LoginPage/>
    }
  ])

  return (
    <>
    
    <RouterProvider router={page}></RouterProvider>
    
    </>
  )
}

export default App