from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django.utils.text import slugify
from authentication.models import User
import os
import uuid
from django.db.models.signals import post_save
from django.dispatch import receiver

def get_file_path(instance, filename):
    ext = filename.split('.')[-1]
    filename = "%s-%s.%s" % (instance.slug ,uuid.uuid4(), ext)
    return os.path.join('images/blog', filename)

class Blog(models.Model):
    title = models.CharField(
        _("Post Title"),
        max_length = 100,
        blank=False,
        null=False
    )
    description = models.TextField(
        _("Post Description"),
        blank=False,
        null=False
    )
    added_on = models.DateTimeField(
        _("Upload On"),
        default=timezone.now,
    )
    slug = models.SlugField(
        _("Safe Url"),
        unique=True,
        blank = True,
        null = True,
    )
    img_url = models.ImageField(
        verbose_name=_('Post Image'),
        upload_to=get_file_path
    )
    stack = models.ManyToManyField(to='Stack')
    field = models.ManyToManyField(to='Field')
    code_snippet = models.TextField(
        _("Code Snippet"),
        blank = True,
        null = True,
    )
    code_snippet_language = models.CharField(
        max_length=100,
        null=True,
        blank=True
    )
    code_url = models.URLField(
        _("Url To Related Code"),
        blank = True,
        null = True,
    )

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)

        super().save(*args, **kwargs)

    def __str__(self) -> str:
        return f'{self.title}'


class BlogComment(models.Model):
    comment = models.CharField(
        _("Post Comment"),
        max_length=100,
        blank=False,
        null=False
    )
    blog = models.ForeignKey(
        to=Blog,
        on_delete=models.CASCADE,
        related_name='comment'
    )
    user = models.ForeignKey(
        to=User,
        on_delete=models.CASCADE,
        null=True,
        blank=True,
    )
    added_on = models.DateTimeField(
        _("Posted On"),
        default=timezone.now,
    )
    code_snippet = models.TextField(
        _("Code Snippet"),
        blank = True,
        null = True,
    )
    code_url = models.URLField(
        _("Url To Related Code"),
        blank = True,
        null = True,
    )

    def __str__(self) -> str:
        return f'{self.blog} - {self.comment}'


class ComComment(models.Model):
    comment = models.CharField(
        _("Comment on comment"),
        max_length = 100,
        blank=False,
        null=False
    )
    reference_comment = models.ForeignKey(
        to=BlogComment,
        on_delete=models.CASCADE
    )
    user = models.ForeignKey(
        to=User,
        on_delete=models.CASCADE
    )
    added_on = models.DateTimeField(
        _("Upload On"),
        default=timezone.now,
    )

    def __str__(self) -> str:
        return f'{self.blog} - {self.comment}'


class Stack(models.Model):
    name = models.CharField(
        _("Technology name"),
        max_length=30,
        blank=False,
        null=False
    )
    project_count = models.IntegerField(
        _("Related Projects"),
        default=0
    )
    blog_count = models.IntegerField(
        _("Related Blog Articles"),
        default=0
    )
    added_on = models.DateTimeField(
        _("Posted On"),
        default=timezone.now,
    )

    def __str__(self) -> str:
        return f'{self.name}'


class Field(models.Model):
    name = models.CharField(
        _("Technology Field name"),
        max_length=100,
        blank=False,
        null=False
    )
    project_count = models.IntegerField(
        _("Related Projects"),
        default=0
    )
    blog_count = models.IntegerField(
        _("Related Blog Articles"),
        default=0
    )
    added_on = models.DateTimeField(
        _("Posted On"),
        default=timezone.now,
    )

    def __str__(self) -> str:
        return f'{self.name}'


class Project(models.Model):
    title = models.CharField(
        _("Post Title"),
        max_length = 100,
        blank=False,
        null=False
    )
    description = models.TextField(
        _("Post Description"),
        blank=False,
        null=False
    )
    added_on = models.DateTimeField(
        _("Upload On"),
        default=timezone.now,
    )
    slug = models.SlugField(
        _("Safe Url"),
        unique=True,
        blank = True,
        null = True,
    )
    img_url = models.ImageField(
        verbose_name=_('Post Image'),
        upload_to=get_file_path,
        blank = True,
        null = True,
    )
    stack = models.ManyToManyField(to='Stack', related_name='Project_stacks')
    field = models.ManyToManyField(to='Field', related_name='Project_fields')

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)

        super().save(*args, **kwargs)

    def __str__(self) -> str:
        return f'{self.title}'


class ScrapedNews(models.Model):
    title = models.CharField(
        _("News Headline"),
        max_length=100,
        blank=False,
        null=False
    )
    description = models.CharField(
        _("News Description"),
        max_length=100,
        blank=False,
        null=False
    )
    source = models.CharField(
        _("News Description"),
        max_length=100,
        blank=False,
        null=False
    )
    added_on = models.DateTimeField(
        _("Upload On"),
        default=timezone.now,
    )


# signals
# blog
@receiver(post_save, sender=Blog)
def record_stack_field_on_blog_save(sender, instance, **kwargs) -> None:
    # get blog stacks
    for stack in instance.stack.all():
        cur_count = stack.blog_count
        stack.blog_count = cur_count + 1

    for field in instance.field.all():
        cur_count = field.blog_count
        field.blog_count = cur_count + 1


# blog
@receiver(post_save, sender=Project)
def record_stack_field_on_blog_save(sender, instance, **kwargs) -> None:
    # get blog stacks
    for stack in instance.stack.all():
        cur_count = stack.project_count
        stack.project_count = cur_count + 1

    for field in instance.field.all():
        cur_count = field.project_count
        field.project_count = cur_count + 1

class BlogReaction(models.Model):
    blog = models.OneToOneField(to=Blog, related_name="blog", on_delete=models.CASCADE)
    user = models.OneToOneField(to=User, related_name="user", on_delete=models.CASCADE)
    added_on = models.DateTimeField(
        _("liked On"),
        default=timezone.now,
    )

    def __str__(self) -> str:
        return "%s - Liked By: %s" % (self.blog, self.user)