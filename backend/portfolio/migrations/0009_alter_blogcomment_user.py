# Generated by Django 4.0.4 on 2022-05-22 13:19

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('portfolio', '0008_alter_blog_slug_alter_comcomment_comment_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogcomment',
            name='user',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]