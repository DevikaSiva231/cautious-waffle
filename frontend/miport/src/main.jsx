import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Layout from './layout'
import App from './App'
import Home from './pages/home.jsx'
import Landingpage from './pages/landingpage.jsx'
import Aboutme from './pages/aboutme.jsx'
import Categories from './pages/categories'
import Galleria from './pages/galleria'
import Artpage from './pages/artpage.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {path:"/",element:<App/>},
      {path:"/home",element:<Home/>},
      {path:"/aboutme",element:<Aboutme/>},
      {path:"/galleria",element:<Galleria/>},
      {path:"/myart",element:<Artpage/>},
    ]
  },
  {
    path: "/portfolio",
    element: <Landingpage />,
  },
]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

