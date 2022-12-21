from django.apps import AppConfig

class NewsScrapperConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'news_scrapper'

    def ready(self) -> None:
        from news_scrapper.scrapper import run_scrapper
        run_scrapper.main()
        return super().ready()