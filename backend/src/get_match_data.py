# import numpy as np
import pandas as pd
import urllib.request
import json
import logging
from backend.src.watcher import watcher
from backend.src.constants import url_of_champ_data

# region = 'EUW1'
# PUUID = '-EchhfyvMfBnQaR5rRkUYqujjbgfRsdG52Aikvhlbk7DsCYJAboXIqhwHt4zIXxZz4Z1IhZfoWVWmQ'


def get_last_match_data(puuid: str, region: str):
    logging.info('Loading all match of player')
    all_matches = watcher.match.matchlist_by_puuid(region=region,
                                                   puuid=puuid)
    logging.info('Filtering to last match')
    last_match = all_matches[0]
    match_detail = watcher.match.by_id(region, last_match)
    return match_detail


def get_last_game_banned_champs(puuid: str, region: str):
    logging.info('Loading all banned champs from last game')
    list_of_all_champion = all_champion_name_id_sorted()
    last_match_detail = get_last_match_data(puuid=puuid, region=region)
    df_last_match_detail = pd.DataFrame.from_dict(last_match_detail)
    dict_get_ban_info_list = df_last_match_detail.loc['teams', 'info']
    banned_champs = []
    for items in dict_get_ban_info_list:  # TODO: 4 for-schleifen bissle runter kürzen
        for bans in items['bans']:
            for check_if_champ in list_of_all_champion.values():
                if check_if_champ == bans['championId']:
                    banned_champs.append(get_champion_by_id(bans['championId']))

    return banned_champs


def all_champion_name_id_sorted():
    logging.info('Loading ddragon champion.json from url')
    with urllib.request.urlopen(url_of_champ_data) as url:
        url_data = json.load(url)
        logging.info('champion.json loaded')
        df_url_data = pd.DataFrame.from_dict(url_data)
        df_id_data = df_url_data.loc[:, "data"]
        champ_list = {}
        logging.info('Creating a dictionary of all champions')
        for champ in df_id_data:
            champ_list.update({champ['id']: champ['key']})

        logging.info('Sorting the dictionary by ID')
        sorted_values = sorted(champ_list.values(), key=lambda x: int(x))

        logging.info('Creating a sorted dict of all champions by ID')
        sorted_dict = {}
        for value in sorted_values:
            for key in champ_list:
                if champ_list[key] == value:
                    sorted_dict[key] = int(value)
    return sorted_dict


all_champs_dict = all_champion_name_id_sorted()


def get_champion_by_id(champ_id):
    logging.info('Getting the name of a champion by its id')
    for value in all_champs_dict.values():
        if value == champ_id:
            return [key for key, val in all_champs_dict.items() if val == value]
