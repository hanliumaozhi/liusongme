import json
import requests

url = "http://127.0.0.1:5000/update_mc_online_time"
player_data = {'user_name': 'liu', 'online_time':'2' }
headers = {'content-type': 'application/json'}

r = requests.post(url, data=json.dumps(player_data), headers=headers)
print r