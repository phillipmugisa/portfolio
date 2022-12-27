#1 /usr/bin/bash

if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    ./venv/bin/activate
else
    ./venv/Scripts/activate
fi

echo "Starting Scrapper"
python manage.py runscrapper
echo "Scrapping Complete"

echo "Press Enter to finish"
read $man