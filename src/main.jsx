import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreatedRouter from './Components/Router.jsx'
import AuthProvider from './Components/UsersRegisterAndLogin/AuthProvider.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className='lg:w-[1280px] md:w-[768px] sm:w-[640px] mx-auto'>
          <RouterProvider router={myCreatedRouter}>
          </RouterProvider>
        </div>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
)