# PajtimGG
This is a project of a student. The goal is to query the data of a summoner in the backend area with Python via the REST interface of Riot Games. 
In the frontend the data is displayed nicely and the page is made interactive for the user. The focus is clearly at the frontend, because I want to 
learn TypeScript and React.

## What I used for the Software Architecture
### Backend 
Python, Uvicorn with FastAPI, LolWatcher, PyLint
### Frontend
Vite, React, TypeScript, EsLint, Prettier, CSS, MUI, Axios

## How to setup PajtimGG
### Setting up the Backend 
```
  cd backend 
  pip install -r requirements.txt (for Windows User) 
  pip3 install -r requirements.txt (for Mac Users)
  cd .. 
```
### Setting up the Frontend
```
  cd frontend 
  npm i (or npm install) / yarn install
```

## How to run PajtimGG
### Run the Backend
--> Run the module main.py (Soon will be updated) 

### Run the Frontend
```
  cd frontend 
  npm run dev 
```

# Backend API

This API provides endpoints for various operations related to summoner information, ranked statistics, and champion data.

## Endpoints

### 1. Summoner Info

#### GET /summoners/{region}/{summoner_name}

This endpoint returns information about a specific summoner.

- `{region}`: The region of the summoner (e.g., "EUW1", "NA1").
- `{summoner_name}`: The name of the summoner.

#### GET /api/summoner-ranked-stats/{summoner_id}

This endpoint returns the ranked statistics for a specific summoner.

- `{summoner_id}`: The ID of the summoner.

#### GET /api/get_summoner_mastery_stats/{summoner_id}

This endpoint returns the mastery statistics for a specific summoner.

- `{summoner_id}`: The ID of the summoner.

#### GET /api/get_summoner_rank/{region}/{summoner_name}

This endpoint returns the rank of a specific summoner in a particular region.

- `{region}`: The region of the summoner (e.g., "EUW1", "NA1").
- `{summoner_name}`: The name of the summoner.

### 2. Match Stats

#### GET /api/get-last-match-data/{region}/{puuid}

This endpoint returns the data of the last match for a specific player.

- `{region}`: The region of the player (e.g., "EUW1", "NA1").
- `{puuid}`: The unique player ID.

### 3. Champion Data

#### GET /api/champions

This endpoint returns all available champion data.

#### GET /api/champion/{champ_id}

This endpoint returns the data for a specific champion based on the champion ID.

- `{champ_id}`: The ID of the champion.

### 4. Miscellaneous

#### GET /api/summoners/{summoner_name}

This endpoint returns information about a specific summoner in all available regions.

- `{summoner_name}`: The name of the summoner.

## Requests and Responses

The API expects HTTP GET requests and returns JSON objects as responses.

## Error Handling

In case of errors, the corresponding HTTP status code is returned, along with an error message in JSON format providing further details.

## Author

This backend was developed by Yusuf Uzun.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
