import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "./components/homepage/HomePage";
import UserSummonerPage from "./components/summoner/UserSummonerPage";
import SummonerPage from "./components/summoner/SummonerPage";
import AllChampionPage from "./components/champion/AllChampionPage";
import NoRegionSummoner from "./components/noregion/NoRegionSummoner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "summoners/:region/:summonerName",
    element: <UserSummonerPage />,
  },
  {
    path: "summoner",
    element: <SummonerPage />,
  },
  {
    path: "champions",
    element: <AllChampionPage />,
  },
  {
    path: "summoners/:summonerName",
    element: <NoRegionSummoner />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
