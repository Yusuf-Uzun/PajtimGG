import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  BrowserRouter,
  createBrowserRouter, 
  HashRouter, 
  RouterProvider,
  useSearchParams,
} from "react-router-dom";
import HomePage from './components/fpage/HomePage';
import SummonerPage from './components/summoner/SummonerPage';
import { Console } from 'console';
import UserSummonerPage from './components/summoner/UserSummonerPage';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)
