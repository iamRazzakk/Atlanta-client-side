import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreatedRouter from './Components/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='lg:w-[1280px] md:w-[768px] sm:w-[640px] mx-auto'>
      <RouterProvider router={myCreatedRouter}>
        <App />
      </RouterProvider>
    </div>
  </React.StrictMode>,
)
