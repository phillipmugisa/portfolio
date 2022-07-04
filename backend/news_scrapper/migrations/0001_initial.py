# Generated by Django 4.0.5 on 2022-07-02 05:54

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='NewsSource',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=500, verbose_name='News Source')),
                ('base_url', models.URLField(blank=True, null=True, verbose_name='Base Url')),
                ('added_on', models.DateTimeField(default=django.utils.timezone.now, verbose_name='Upload On')),
            ],
        ),
        migrations.CreateModel(
            name='NewsArticle',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=500, verbose_name='News Headline')),
                ('category', models.CharField(max_length=500, verbose_name='Category')),
                ('description', models.CharField(blank=True, max_length=500, null=True, verbose_name='News Description')),
                ('url', models.URLField(verbose_name='News Url')),
                ('img_url', models.URLField(max_length=500, verbose_name='Image Url')),
                ('posted_on', models.DateTimeField(blank=True, null=True, verbose_name='Posted On')),
                ('added_on', models.DateTimeField(default=django.utils.timezone.now, verbose_name='Upload On')),
                ('source', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Source', to='news_scrapper.newssource')),
            ],
            options={
                'ordering': ('-added_on',),
            },
        ),
    ]
