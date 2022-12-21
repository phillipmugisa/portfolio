from django.urls import re_path, include, path
from rest_framework import routers
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

app_name = 'api'

api_router = routers.DefaultRouter()
api_router.register(r'projects', views.ProjectViews, basename='projects')
api_router.register(r'blogs', views.BlogViews, basename='blogs')
api_router.register(r'users', views.UserView, basename='users')
api_router.register(r'comment', views.CommentView, basename='comment')
api_router.register(r'stacks', views.StackView, basename='stacks')
api_router.register(r'fields', views.FieldView, basename='fields')

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    re_path(r'^blog_comment/(?P<blog_slug>[^/.]+)', views.BlogCommentViews.as_view(), name='blog-comment'),
    re_path(r'^reactions/(blogs)/(?P<blog_slug>[^/.]+)', views.ReactionCountView.as_view(), name="blog-reactions"),
    re_path(r'^stackstats/$', views.StackFieldStats.as_view(), name="stack-field-stats"),
    re_path(r'^subscribe/$', views.SubscriberView.as_view(), name="subscribe"),
    re_path(r'^user_register/$', views.UserRegisterView.as_view(), name="register-user"),
]

urlpatterns += api_router.urls