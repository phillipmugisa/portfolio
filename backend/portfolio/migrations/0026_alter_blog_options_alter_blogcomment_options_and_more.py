# Generated by Django 4.0.4 on 2022-05-27 23:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0025_alter_project_title'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='blog',
            options={'ordering': ('-added_on',)},
        ),
        migrations.AlterModelOptions(
            name='blogcomment',
            options={'ordering': ('-added_on',)},
        ),
        migrations.AlterModelOptions(
            name='project',
            options={'ordering': ('-added_on',)},
        ),
        migrations.AlterModelOptions(
            name='scrapednews',
            options={'ordering': ('-added_on',)},
        ),
        migrations.AlterModelOptions(
            name='subscriber',
            options={'ordering': ('-subscribed_on',)},
        ),
    ]