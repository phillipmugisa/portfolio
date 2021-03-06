# Generated by Django 4.0.4 on 2022-05-18 13:25

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0003_blog_code_snippet_blog_code_url_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='ScrapedNews',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50, verbose_name='News Headline')),
                ('description', models.CharField(max_length=100, verbose_name='News Description')),
                ('source', models.CharField(max_length=50, verbose_name='News Description')),
                ('added_on', models.DateTimeField(default=django.utils.timezone.now, verbose_name='Upload On')),
            ],
        ),
        migrations.AddField(
            model_name='comcomment',
            name='added_on',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='Upload On'),
        ),
        migrations.AlterField(
            model_name='field',
            name='name',
            field=models.CharField(max_length=100, verbose_name='Technology Field name'),
        ),
    ]
