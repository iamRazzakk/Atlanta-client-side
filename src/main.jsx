import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreatedRouter from './Components/Router.jsx'
import AuthProvider from './Components/UsersRegisterAndLogin/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className='lg:w-[1280px] md:w-[768px] sm:w-[640px] mx-auto'>
        <RouterProvider router={myCreatedRouter}>
        </RouterProvider>
      </div>
    </AuthProvider>
  </React.StrictMode>
)