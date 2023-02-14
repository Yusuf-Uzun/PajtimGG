from fastapi import FastAPI
import get_match_data
import get_summoner_data

app = FastAPI()


@app.get("/api/summoner-info/", tags=["Summoner Info"])
async def get_summoner_info(summoner_name: str, region: str):
    return get_summoner_data.get_backend_summoner_info(summoner_name=summoner_name, region=region)


@app.get("/api/summoner-ranked-stats/{summoner_id}", tags=["Summoner Info"])
async def get_summoner_ranked_stats(summoner_id: str):
    return get_summoner_data.get_summoner_ranked_stats(summoner_id)


@app.get("/api/get-last-match-data/{puuid}", tags=["Match Stats"])
async def get_last_match_data(puuid: str):
    return get_match_data.get_last_match_data(puuid)
