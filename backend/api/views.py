from rest_framework import viewsets, status
from rest_framework import permissions
from portfolio.models import *
from . import serializers
from authentication.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import filters
from django.db.models import Q, Count
from rest_framework import pagination

class CustomSearchFilter(filters.SearchFilter):
    def filter_queryset(self, request, queryset, view):
        if request.GET.get('search', []):
            return queryset.filter(Q(stack__name = request.GET.get('search')) | Q(field__name = request.GET.get('search')))
        return super().filter_queryset(request, queryset, view)

class CustomPagination(pagination.PageNumberPagination):
    def get_paginated_response(self, data):
        response = super().get_paginated_response(data).data
        response['pages_count'] = self.page.paginator.num_pages
        return Response(response)

class ProjectViews(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = serializers.ProjectSerializer
    lookup_field = 'slug'
    filter_backends = [CustomSearchFilter]
    pagination_class = CustomPagination

    def get_permissions(self):
        if self.action in ['PUT', 'PATCH']:
            permission_classes = [permissions.IsAdminUser]
        else:
            permission_classes = [permissions.AllowAny]
        return [permission() for permission in permission_classes]


    def create(self, request, *args, **kwargs):
        try:
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            data = {"data" : serializer.data, "messages" : {"alertType" : "success", "alertMsg" : f"Thank you for reaching out to me. I will get back to you as soon as possible."}}
            return Response(data, status=status.HTTP_201_CREATED, headers=headers)
        except:
            return Response(data={"messages" : {"alertType" : "error", "alertMsg" : f"Opps! An error occured. Try again!"}}, status=status.HTTP_500_INTERNAL_SERVER_ERROR) 


class BlogViews(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = serializers.BlogSerializer
    lookup_field = 'slug'
    pagination_class = CustomPagination

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

    def post(self, request, **kwargs):
        try:
            blog = Blog.objects.filter(slug=kwargs.get("blog_slug", 0)).first()
            serializer = self.get_serializer(data = request.data)
            if serializer.is_valid():
                comment = BlogComment(**serializer.validated_data, blog=blog)
                comment.save()
                return Response(data = {"data" : serializer.data, "messages" : {"alertType" : "success", "alertMsg" : f"Comment posted succuessfully."}})
        except Exception as e:
            print(e)
            return Response(data={"messages" : {"alertType" : "error", "alertMsg" : f"Opps! An error occured. Try again!"}}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            


class CommentView(viewsets.ModelViewSet):
    queryset = BlogComment.objects.all()
    serializer_class = serializers.BlogCommentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    lookup_field = 'pk'


class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer
    permission_classes = [permissions.AllowAny]

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

    def post(self, request, **kwargs):
        blog = Blog.objects.get(slug=kwargs.get("blog_slug", 0))
        
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
                        data = {"data" : serializer.data, "messages" : {"alertType" : "success", "alertMsg" : f"Reaction posted."}}
                        return Response(data, status=status.HTTP_201_CREATED)
                except Exception as Err:
                    raise(Err)
                    return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        else:
            return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)


class StackFieldStats(APIView):
    def get(self, request, **kwargs):
        try:
            blog_fields = [obj for obj in Blog.objects.values("field__name").annotate(Count("field"))]
            blog_stacks = [obj for obj in Blog.objects.values("stack__name").annotate(Count("stack"))]
            project_fields = [obj for obj in Project.objects.values("field__name").annotate(Count("field"))]
            blog_stacks = [obj for obj in Project.objects.values("stack__name").annotate(Count("stack"))]

            data = {}
            for obj in [*blog_fields, *blog_stacks, *project_fields, *blog_stacks]:
                if obj.get("field__name", 0):
                    # is field
                    field_name = obj["field__name"]
                    if data.get(field_name, 0):
                        data[field_name] += obj["field__count"]
                    else:
                        data[field_name] = obj["field__count"]
                else:
                    # is stack
                    stack_name = obj["stack__name"]
                    if data.get(stack_name, 0):
                        data[stack_name] += obj["stack__count"]
                    else:
                        data[stack_name] = obj["stack__count"]

            return Response(data, status= status.HTTP_200_OK)
        except:
            return Response(status= status.HTTP_200_OK)
class SubscriberView(APIView):
    serializer_class = serializers.SubscriberSerializer
    permission_classes = [permissions.AllowAny]
    def post(self, request, **kwargs):
        try:
            # check is user is already subscribed
            serializer = self.serializer_class(data = request.data)
            if serializer.is_valid():
                sub_email = serializer.data.get("email")
                if not Subscriber.objects.filter(email = sub_email).exists():
                    serializer.create(serializer.validated_data)
                    # send activation link
                    return Response(data={"messages" : {"alertType" : "success", "alertMsg" : f"Thank you for subscribing. An activation link has been sent to your email."}}, status=status.HTTP_201_CREATED)
                else:
                    return Response(data={"messages" : {"alertType" : "infor", "alertMsg" : f"Email: {sub_email} already subscribed."}}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(data={"messages" : {"alertType" : "error", "alertMsg" : f"Opps! An error occured. Try again!"}}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)        

    def get(self, request, **kwargs):
        if request.user.is_authenticated and request.user.is_superuser:
            data = Subscriber.objects.all()
            return Response({"count": data.count(), "result" : self.serializer_class(data, many=True).data}, status= status.HTTP_200_OK)
        else:
            return Response(status= status.HTTP_403_FORBIDDEN)


class StackView(viewsets.ModelViewSet):
    queryset = Stack.objects.all()
    serializer_class = serializers.StackSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class FieldView(viewsets.ModelViewSet):
    queryset = Field.objects.all()
    serializer_class = serializers.FieldSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class UserRegisterView(APIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserRegisterSerializer
    permission_classes = [permissions.AllowAny]
    http_method_names = ['post']

    def post(self, request, **kwargs):
        try:
            # check is user is already subscribed
            print(request.data)
            serializer = self.serializer_class(data = request.data)
            if serializer.is_valid():
                # check if username exists
                if not User.objects.filter(username=serializer.validated_data.get('username')).exists():
                    # create user
                    serializer.save()
                    return Response(status=status.HTTP_201_CREATED)
                else:
                    return Response(data={"username" : "Username not available"}, status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response(data={"messages" : {"alertType" : "error", "alertMsg" : f"Opps! An error occured. Try again!"}}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)