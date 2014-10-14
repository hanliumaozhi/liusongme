import json
import requests

url = "http://www.liusong.me/update_mc_online_time"
player_data = {'user_name': 'liu', 'online_time':'2' }

r = requests.post(url, data=player_data)
print r