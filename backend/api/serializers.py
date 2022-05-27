from rest_framework import serializers
from portfolio import models
from authentication.models import User
import uuid
from django.contrib.humanize.templatetags.humanize import naturaltime

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("username", "img_url")

# used in views -> temporary
class StackSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Stack
        fields = ('name',)

class FieldSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Field
        fields = ('name',)

# used for projects and blog
class _StackSerializer(serializers.RelatedField, StackSerializer):
    def to_internal_value(self, data):
        return self.queryset.get(name=data).pk

    def to_representation(self, value):
        return str(value)

class _FieldSerializer(serializers.RelatedField, FieldSerializer):
    def to_internal_value(self, data):
        return self.queryset.get(name=data).pk

    def to_representation(self, value):
        return str(value)

class ProjectSerializer(serializers.ModelSerializer):
    stack = _StackSerializer(queryset=models.Stack.objects.all(), many=True)
    field = _FieldSerializer(queryset=models.Field.objects.all(), many=True)

    class Meta:
        model = models.Project
        lookup_field = 'slug'
        fields = '__all__'

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['id'] = uuid.uuid4()
        representation['added_on'] = naturaltime(instance.added_on).title()

        if instance.end_date:
            representation['end_date'] = naturaltime(instance.end_date).title()
        
        representation['title'] = naturaltime(instance.title).title()

        return representation

class BlogCommentSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    blog = serializers.StringRelatedField(read_only=True)
    class Meta:
        model = models.BlogComment
        fields = '__all__'

    def validate(self, attrs):
        attrs['user'] = self.context['request'].user
        return super().validate(attrs)

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['id'] = uuid.uuid4()

        return representation

class BlogCommentCommentSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    class Meta:
        model = models.ComComment
        fields = '__all__'

    def validate(self, attrs):
        attrs['user'] = self.context['request'].user
        return super().validate(attrs)

class BlogSerializer(serializers.ModelSerializer):
    stack = _StackSerializer(queryset=models.Stack.objects.all(), many=True)
    field = _FieldSerializer(queryset=models.Field.objects.all(), many=True)
    # comments = serializers.PrimaryKeyRelatedField(many=True, queryset=models.BlogComment.objects.all())
    class Meta:
        model = models.Blog
        lookup_field = 'slug'
        fields = '__all__'

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['id'] = uuid.uuid4()
        representation['added_on'] = naturaltime(instance.added_on).title()
        representation['title'] = naturaltime(instance.title).title()
        return representation

class BlogReactionSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    blog = serializers.StringRelatedField(read_only=True)
    class Meta:
        model = models.BlogReaction
        fields = "__all__"

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['id'] = uuid.uuid4()
        return representation

class ScrapedNewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ScrapedNews
        fields = "__all__"

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['id'] = uuid.uuid4()
        return representation

class SubscriberSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Subscriber
        fields = "__all__"