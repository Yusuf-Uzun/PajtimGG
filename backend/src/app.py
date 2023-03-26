from fastapi import FastAPI, Query
import get_match_data
import get_summoner_data
from fastapidesc import description, contract
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title='Pajtim.gg',
    description=description,
    contact=contract,
)
origins = ['http://localhost:4200', 'http://api.localhost:4200']
app.add_middleware(
    CORSMiddleware, 
    allow_origins = origins, 
    allow_credentials = True, 
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/summoners/{region}/{summoner_name}", tags=["Summoner Info"])
async def get_summoner_info(summoner_name: str, region: str = Query("region", enum=["EUW1", "NA1"])):
    return get_summoner_data.get_backend_summoner_info(summoner_name=summoner_name, region=region)


@app.get("/api/summoner-ranked-stats/{summoner_id}", tags=["Summoner Info"])
async def get_summoner_ranked_stats(summoner_id: str, region: str = Query("region", enum=["EUW1", "NA1"])):
    return get_summoner_data.get_summoner_ranked_stats(summoner_id=summoner_id, region=region)


@app.get("/api/get-last-match-data/{puuid}", tags=["Match Stats"])
async def get_last_match_data(puuid: str, region: str = Query("region", enum=["EUW1", "NA1"])):
    return get_match_data.get_last_match_data(puuid=puuid, region=region)

@app.get("/api/get_summoner_mastery_stats/{summoner_id}", tags=["Summoner Info"])
async def get_summoner_mastery_stats(summoner_id: str, region: str = Query("region", enum=["EUW1", "NA1"])):
    return get_summoner_data.get_summoner_mastery_stats(summoner_id=summoner_id, region=region)