from rest_framework import viewsets, status
from rest_framework import permissions
from portfolio.models import *
from . import serializers
from authentication.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics


class ProjectViews(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = serializers.ProjectSerializer
    lookup_field = 'slug'

    def get_permissions(self):
        if self.action in ['PUT', 'PATCH']:
            permission_classes = [permissions.IsAdminUser]
        else:
            permission_classes = [permissions.IsAuthenticatedOrReadOnly]
        return [permission() for permission in permission_classes]


class BlogViews(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = serializers.BlogSerializer
    lookup_field = 'slug'

    def get_permissions(self):
        if self.action in ['PUT', 'PATCH']:
            permission_classes = [permissions.IsAdminUser]
        else:
            permission_classes = [permissions.IsAuthenticatedOrReadOnly]
        return [permission() for permission in permission_classes]

class BlogCommentViews(generics.ListCreateAPIView):
    queryset = BlogComment.objects.all()
    serializer_class = serializers.BlogCommentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get(self, request, **kwargs):
        # fetch related blog
        blog = Blog.objects.get(slug=kwargs.get("blog_slug", 0))
        # fetch comments
        result = BlogComment.objects.filter(blog = blog)
        serializer = serializers.BlogCommentSerializer(result, many=True)

        return Response({
            "count" : result.count(),
            "result" : serializer.data
        }, status = status.HTTP_200_OK)


class CommentView(viewsets.ModelViewSet):
    queryset = BlogComment.objects.all()
    serializer_class = serializers.BlogCommentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    lookup_field = 'pk'


class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer

class ReactionCountView(APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request, **kwargs):
        blog = Blog.objects.get(slug=kwargs.get("blog_slug", 0))
        
        result = BlogReaction.objects.filter(blog=blog)
        serializer = serializers.BlogReactionSerializer(result, many=True)

        return Response({
            "count" : result.count(),
            "result" : serializer.data
        }, status = status.HTTP_200_OK)

    def put(self, request, **kwargs):
        blog = Blog.objects.get(slug=kwargs.get("blog_slug", 0))
        # chech if user has already liked this blog
        
        if request.user.is_authenticated:
            blog_reaction = BlogReaction.objects.filter(user=request.user, blog=blog)
            if blog_reaction:
                blog_reaction.delete()
                return Response(status=status.HTTP_200_OK)
            else:
                try:
                    reaction = BlogReaction(user=request.user, blog=blog)
                    reaction.save()
                    serializer = serializers.BlogReactionSerializer(reaction)
                    if serializer:
                        return Response(serializer.data, status=status.HTTP_200_OK)
                except:
                    return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        else:
            return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)