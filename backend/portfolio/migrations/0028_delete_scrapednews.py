# Generated by Django 4.0.4 on 2022-06-16 20:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0027_alter_blogreaction_user'),
    ]

    operations = [
        migrations.DeleteModel(
            name='ScrapedNews',
        ),
    ]
