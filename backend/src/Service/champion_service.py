from Information.watcher import watcher

versions = watcher.data_dragon.versions_for_region('euw1')
champions_version = versions['n']['champion']
def get_all_champions():
    champions = watcher.data_dragon.champions(champions_version)['data']
    list_of_champs = []
    for champion in champions:
        list_of_champs.append(champion)
    return list_of_champs
