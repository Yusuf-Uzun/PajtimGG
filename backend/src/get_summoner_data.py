# import numpy as np
# import pandas as pd
import logging
from backend.src.watcher import watcher


def get_backend_summoner_info(summoner_name: str, region: str):
    logging.info('Getting the Summoner ÌD of {}'.format(summoner_name))
    summoner_info = watcher.summoner.by_name(region=region, summoner_name=summoner_name)
    return summoner_info


def get_profile_icon(summoner_name: str, region: str) -> int:
    logging.info('Getting the profile icon {}'.format(summoner_name))
    return get_backend_summoner_info(summoner_name=summoner_name, region=region)['profileIconId']


def get_summoner_ranked_stats(summoner_id: str, region: str):
    logging.info('Getting the Summoner ranked stats of summoner-id:{}'.format(summoner_id))
    ranked_stats = watcher.league.by_summoner(region=region, encrypted_summoner_id=summoner_id)
    return ranked_stats


def get_summoner_mastery_stats(summoner_id: str, region: str):
    logging.info('Getting Mastery stats of summoner-id:{}'.format(summoner_id))
    mastery_stats = watcher.champion_mastery.by_summoner(region=region, encrypted_summoner_id=summoner_id)
    return mastery_stats
