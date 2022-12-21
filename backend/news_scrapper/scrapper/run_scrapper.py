from news_scrapper import serializers
from news_scrapper import models
from news_scrapper.scrapper.scrapper import NytScrapper, GoogleNewsScrapper, YahooNewsScrapper, ScrapperException

import json

def save_to_db(source_id : int, obj : object) -> None:
    # serialize per category
    for data in obj:
        articles = list(map(lambda obj: {**obj, 'category': data.get('category'), 'source_id' : source_id}, data.get('articles')))

        serializer = serializers.NewsSerializer(data=articles, many=True)
        
        if serializer.is_valid():
            serializer.save()
        else:
            print(serializer.errors)

def get_source_id(source : str) -> int:
    return models.NewsSource.objects.get(name=source).pk

def fetch_data(cls: object):
    try:
        # try:
        #     base_url = cls.get_base_url()
        # except ScrapperException:
        #     base_url = None

        source = cls.get_name()
        data = cls.run()

        return get_source_id(source), data
    except Exception as Err:
        raise Err
        

def main():
    # nyt_scrapper = NytScrapper()
    # google_scrapper = GoogleNewsScrapper()
    # yahoo_news_scrapper = YahooNewsScrapper()

    # # fetch data
    # for cls in [nyt_scrapper, google_scrapper, yahoo_news_scrapper]:
    #     source_id, obj = fetch_data(cls)
    #     save_to_db(source_id, obj)

    pass
