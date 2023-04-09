import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter, 
  RouterProvider,
} from "react-router-dom";
import HomePage from './components/fpage/HomePage';
import SummonerPage from './components/summoner/SummonerPage';

const router = createBrowserRouter([
  {
    path:"/",
    element: <HomePage />
  },
  {
    path: "/summoner",
    element: <SummonerPage />
  },
])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
