from django.urls import re_path, include
from rest_framework import routers
from . import views

app_name = 'api'

api_router = routers.DefaultRouter()
api_router.register(r'projects', views.ProjectViews, basename='projects')
api_router.register(r'blogs', views.BlogViews, basename='blogs')
api_router.register(r'users', views.UserView, basename='users')
api_router.register(r'comment', views.CommentView, basename='comment')

urlpatterns = [
    re_path(r'^blog_comment/(?P<blog_slug>[^/.]+)', views.BlogCommentViews.as_view(), name='blog-comment'),
    re_path(r'^reactions/(blogs)/(?P<blog_slug>[^/.]+)', views.ReactionCountView.as_view(), name="blog-reactions"),
]

urlpatterns += api_router.urls