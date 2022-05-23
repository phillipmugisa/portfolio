from rest_framework import serializers
from portfolio import models
from authentication.models import User

class StackSerializer(serializers.RelatedField, serializers.ModelSerializer):
    class Meta:
        model = models.Stack
        fields = ('name',)

    def to_internal_value(self, data):
        return self.queryset.get(name=data).pk

    def to_representation(self, value):
        return str(value)

class FieldSerializer(serializers.RelatedField, serializers.ModelSerializer):
    class Meta:
        model = models.Field
        fields = ('name',)

    def to_internal_value(self, data):
        return self.queryset.get(name=data).pk

    def to_representation(self, value):
        return str(value)

class ProjectSerializer(serializers.ModelSerializer):
    stack = StackSerializer(many=True, queryset=models.Stack.objects.all())
    field = FieldSerializer(many=True, queryset=models.Field.objects.all())
    class Meta:
        model = models.Project
        lookup_field = 'slug'
        fields = '__all__'


class BlogCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.BlogComment
        fields = '__all__'

    def validate(self, attrs):
        attrs['user'] = self.context['request'].user
        return super().validate(attrs)

class BlogCommentCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ComComment
        fields = '__all__'

    def validate(self, attrs):
        attrs['user'] = self.context['request'].user
        return super().validate(attrs)

class BlogSerializer(serializers.ModelSerializer):
    stack = StackSerializer(many=True, queryset=models.Stack.objects.all())
    field = FieldSerializer(many=True, queryset=models.Field.objects.all())
    # comments = serializers.PrimaryKeyRelatedField(many=True, queryset=models.BlogComment.objects.all())
    class Meta:
        model = models.Blog
        lookup_field = 'slug'
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("username", "first_name", "last_name", "email", "img_url")

class BlogReactionSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(read_only=True)
    class Meta:
        model = models.BlogReaction
        fields = ("user",)