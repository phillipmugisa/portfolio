from django import urls
from django.urls import re_path
from rest_framework import routers
from . import views

app_name = "news"

api_router = routers.DefaultRouter()
api_router.register(r'', views.NewsListView, basename='news')

urlpatterns = [
    re_path("scrap/", views.ScrapperActivator.as_view())
]

urlpatterns += api_router.urls