from fastapi import FastAPI, Query
import Service.MatchService as get_match_data
import Service.SummonerService as get_summoner_data
import Service.ChampionService as get_champions_data
from Information.fastapidesc import description, contract
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title='Pajtim.gg',
    description=description,
    contact=contract,
)
app.add_middleware(
    CORSMiddleware, 
    allow_origins = ["*"], 
    allow_credentials = True, 
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/summoners/{region}/{summoner_name}", tags=["Summoner Info"])
async def get_summoner_info(summoner_name: str, region: str = Query("region", enum=["EUW1", "NA1"])):
    #return get_summoner_data.get_backend_summoner_info(summoner_name=summoner_name, region=region)
    return get_summoner_data.summoner_stats_automatized(summoner_name=summoner_name, region=region)


@app.get("/api/summoner-ranked-stats/{summoner_id}", tags=["Summoner Info"])
async def get_summoner_ranked_stats(summoner_id: str, region: str = Query("region", enum=["EUW1", "NA1"])):
    return get_summoner_data.get_summoner_ranked_stats(summoner_id=summoner_id, region=region)


@app.get("/api/get-last-match-data/{region}/{puuid}", tags=["Match Stats"])
async def get_last_match_data(puuid: str, region: str = Query("region", enum=["EUW1", "NA1"])):
    return get_match_data.get_last_match_data(puuid=puuid, region=region)

@app.get("/api/get_summoner_mastery_stats/{summoner_id}", tags=["Summoner Info"])
async def get_summoner_mastery_stats(summoner_id: str, region: str = Query("region", enum=["EUW1", "NA1"])):
    return get_summoner_data.get_summoner_mastery_stats(summoner_id=summoner_id, region=region)

@app.get("/api/get_summoner_rank/{region}/{summoner_name}", tags=["Summoner Info"])
async def get_summoner_rank(summoner_name: str, region: str):
    return get_summoner_data.get_summoner_rank(summoner_name=summoner_name, region=region)  

@app.get("/api/champions", tags=['Champion Data'])
async def get_all_champions():
    return get_champions_data.get_all_champions()

@app.get("/api/champion/{champ_id}", tags=['Champion Data'])
async def get_champ_by_id(champ_id):
    return get_summoner_data.get_champion_by_id(champ_id=champ_id)