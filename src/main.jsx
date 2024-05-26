import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './routes/About.jsx'
import Job from './routes/Job.jsx'
import Portfolio from './routes/Portfolio.jsx'
import Skill from './routes/Skill.jsx'
import Root from './Root.jsx'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: '/',
        element: <About/>
      },
      {
        path: '/about',
        element: <About/>,
      },
      {
        path: '/job',
        element: <Job/>,
      },
      {
        path: '/portfolio',
        element: <Portfolio/>,
      },{
        path: '/skill',
        element: <Skill/>,
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
