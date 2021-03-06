# Generated by Django 4.0.4 on 2022-05-27 11:11

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0018_scrapednews_news_url'),
    ]

    operations = [
        migrations.CreateModel(
            name='Subscriber',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(blank=True, max_length=100, null=True, verbose_name='Username')),
                ('email', models.EmailField(max_length=254, verbose_name='Subscriber Email')),
                ('subscribed_on', models.DateTimeField(default=django.utils.timezone.now, verbose_name='Subscribed On')),
                ('is_activated', models.BooleanField(default=False, verbose_name='Subscriber Activated')),
            ],
        ),
        migrations.RemoveField(
            model_name='field',
            name='blog_count',
        ),
        migrations.RemoveField(
            model_name='field',
            name='project_count',
        ),
        migrations.RemoveField(
            model_name='stack',
            name='blog_count',
        ),
        migrations.RemoveField(
            model_name='stack',
            name='project_count',
        ),
    ]
