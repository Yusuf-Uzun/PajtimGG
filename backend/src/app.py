from fastapi import FastAPI, Query
import get_match_data
import get_summoner_data

app = FastAPI()

#TODO: frontend stuff
""""
@app.get("/")
async def root():
    return {"root": "Hier soll die offizielle, bzw. Startseite sein"}
"""""

@app.get("/api/summoner-info/", tags=["Summoner Info"])
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


@app.get("/api/get_champion_by_id/{champion_id}", tags=["Game Info"])
async def get_champion_by_id(champion_id: int):
    return get_match_data.get_champion_by_id(champ_id=champion_id)

@app.get("/api/get_last_match_participants_name/{summoner_id}", tags=["Game Info"])
async def get_last_match_participants_name(puuid: str, region: str = Query("region", enum=["EUW1", "NA1"])):
    return get_match_data.get_last_match_participants_name(puuid=puuid, region=region)

@app.get("/api/get_last_20_match_info/{puuid}", tags=["Game Info"])
async def get_last_20_match_info(puuid: str, region: str = Query("region", enum=["EUW1", "NA1"])):
    return get_match_data.get_last_20_matches_info(puuid=puuid, region=region)
