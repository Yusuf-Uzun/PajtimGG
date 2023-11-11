from riotwatcher import LolWatcher
from dotenv import load_dotenv
import os

load_dotenv()
LOL_API_KEY= os.getenv("LOL_API_KEY")

watcher = LolWatcher(LOL_API_KEY)
