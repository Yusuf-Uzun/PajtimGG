# import numpy as np
import pandas as pd
import logging
from watcher import watcher

# name = str(input())


# id, accountId, puuid, name, profileIconId, revisionDate, summonerLevel
def get_backend_summoner_info(summoner_name, region):
    logging.info('Getting the Summoner ÌD of {}'.format(summoner_name))
    summoner_info = watcher.summoner.by_name(region=region, summoner_name=summoner_name)
    return summoner_info


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
    test = get_backend_summoner_info(summoner_name, region)
    test1 = get_summoner_mastery_stats(summoner_id=test['id'], region= region)
    test2 = get_summoner_ranked_stats(summoner_id=test['id'], region=region)

    return test, test1, test2

test = summoner_stats_automatized(summoner_name='Yusi', region='EUW1')
