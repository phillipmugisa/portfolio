# Generated by Django 4.0.4 on 2022-05-27 19:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0020_project_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='submitted_via',
            field=models.CharField(default='Admin', max_length=20, verbose_name='Project Source'),
        ),
        migrations.AlterField(
            model_name='project',
            name='description',
            field=models.TextField(verbose_name='Project Description'),
        ),
    ]