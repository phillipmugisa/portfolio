from news_scrapper.scrapper import run_scrapper
from django.core.management.base import BaseCommand

class Command(BaseCommand):

    help = """
        Run News Scrapper
    """

    def run_scrapper(self):
       run_scrapper.main()            

    def handle(self, *args, **kwargs):
        self.run_scrapper()