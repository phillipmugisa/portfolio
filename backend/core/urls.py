from django.contrib import admin
from django.urls import re_path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    re_path(r'^admin/', admin.site.urls),
    re_path(r'^api/', include('api.urls', namespace='api')),
    re_path(r'^news/', include('news_scrapper.urls', namespace='news'))
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)