import os
import json
import requests
from datetime import datetime
from bs4 import BeautifulSoup as soup


url = "https://jadwalsholat.org/adzan/monthly.php"

resp = requests.get(url)
page_soup = soup(resp.content, 'html.parser')
table_adzan = page_soup.find('table', class_='table_adzan')
rows = table_adzan.find_all('tr', recursive=False)
all_data = []
for row in rows[2:-15]:
    columns = row.find_all('td')
    data = {
        "tanggal": columns[0].text.strip(),
        "imsyak": columns[1].text.strip(), 
        "subuh": columns[2].text.strip(),
        "terbit": columns[3].text.strip(),
        "dhuha": columns[4].text.strip(),
        "dzuhur": columns[5].text.strip(),
        "ashar": columns[6].text.strip(),
        "magrib": columns[7].text.strip(),
        "isya": columns[8].text.strip()
    }
    all_data.append(data)
home = os.getcwd()
year_month = f"{datetime.now().year}{datetime.now().month}"
schedule_path = os.path.join(home, f'jadwal_{year_month}.json')
with open(schedule_path, 'w', encoding='utf-8') as f:
    json.dump(all_data, f, ensure_ascii=False, indent=4)
