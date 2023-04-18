# import numpy as np
import pandas as pd
import logging
from Information.watcher import watcher
from Service.MatchService import get_champion_by_id
# name = str(input())


# id, accountId, puuid, name, profileIconId, revisionDate, summonerLevel
def get_backend_summoner_info(summoner_name, region):
    logging.info('Getting the Summoner ÌD of {}'.format(summoner_name))
    summoner_info = watcher.summoner.by_name(region=region, summoner_name=summoner_name)
    return summoner_info

def get_summoner_rank(summoner_name, region):
    # Get the summoner's ID
    summoner = watcher.summoner.by_name(region, summoner_name)
    summoner_id = summoner['id']
    # Get the summoner's league entries
    league_entries = watcher.league.by_summoner(region=region, summoner_id=summoner_name)
    # Filter the league entries to only include past seasons
    past_season_entries = [
        entry for entry in league_entries 
        if int(entry['leagueId'].split(':')[0]) < 14
    ]
    # Create a dictionary mapping each season to the summoner's rank
    ranks_by_season = {
        int(entry['leagueId'].split(':')[0]): f"{entry['tier']} {entry['rank']}"
        for entry in past_season_entries
    }

    return ranks_by_season

# leagueId, queueType, tier, rank, summonerId, summonerName, leaguePoints, wins, losses, veteran, inactive
# freshBlood, hotStreak
def get_summoner_ranked_stats(summoner_id: str, region: str):
    logging.info('Getting the Summoner ranked stats of summoner-id:{}'.format(summoner_id))
    ranked_stats = watcher.league.by_summoner(region=region, encrypted_summoner_id=summoner_id)
    return ranked_stats

def get_summoner_mastery_stats(summoner_id: str, region: str):
    logging.info('Getting Mastery stats of summer-id:{}'.format(summoner_id))
    mastery_stats = watcher.champion_mastery.by_summoner(region=region, encrypted_summoner_id=summoner_id)
    return mastery_stats



def summoner_stats_automatized(summoner_name, region):
    summoner_info = get_backend_summoner_info(summoner_name, region)
    summoner_mastery_stats = get_summoner_mastery_stats(summoner_id=summoner_info['id'], region= region)
    summoner_mastery_stats = summoner_mastery_stats[0:5]
    top_5_champs = []
    top_5_mastery_points = []
    for champion in summoner_mastery_stats:
        top_5_champs.append(get_champion_by_id(champion['championId']))
        top_5_mastery_points.append(champion['championPoints'])
    summoner_ranked_stats = get_summoner_ranked_stats(summoner_id=summoner_info['id'], region=region)

    return {'sum_info': summoner_info, 'best_champs': top_5_champs, 'mastery_points': top_5_mastery_points, 'sum_ranked_stats': summoner_ranked_stats}

