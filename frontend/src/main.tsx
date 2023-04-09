import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter, 
  RouterProvider,
  useSearchParams,
} from "react-router-dom";
import HomePage from './components/fpage/HomePage';
import SummonerPage from './components/summoner/SummonerPage';
import { Console } from 'console';

const regexPath: RegExp = /^\/summoner\/[A-Za-z0-9]+$/;

let sumPath = ""
interface AccessSumNameProps {
  propsSummoner: string;
  propsRegion: string;
}

function AccessSumName(props: AccessSumNameProps) {
  const { propsSummoner, propsRegion } = props;

  sumPath = `/summoner/${propsSummoner}/${propsRegion}`;
  
  console.log(sumPath)
  return (
    <div></div>
  )
}
export default AccessSumName;

const router = createBrowserRouter([
  {
    path:"/",
    element: <HomePage />
  },
  {
    path: sumPath,
    element: <SummonerPage />
  },
])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
