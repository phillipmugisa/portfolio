# Generated by Django 4.0.4 on 2022-05-22 15:52

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('portfolio', '0010_blog_likes_alter_blogcomment_blog'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='blog',
            name='likes',
        ),
        migrations.CreateModel(
            name='BlogReaction',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('added_on', models.DateTimeField(default=django.utils.timezone.now, verbose_name='liked On')),
                ('blog', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='liked_blog', to='portfolio.blog')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='liked_by', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
