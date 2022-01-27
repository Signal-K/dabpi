import requests

headers = {
    'x-session-token': '5995a0ce1afe87ac9dd49c509bd2fcae6f7d79ab',
    'LL-Version': '2021-03-01',
}

response = requests.get('https://api.lootlocker.io/game/player/files', headers=headers)