import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Add from './components/Add.jsx'
import List from './components/List.jsx'
import Update from './components/Update.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router=createBrowserRouter([
  {path:"/", element:<App/>},
  {path:"/add", element:<Add/>},
  {path:"/update", element:<Update/>},
  {path:"/list", element:<List/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
