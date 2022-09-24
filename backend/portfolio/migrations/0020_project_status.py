# Generated by Django 4.0.4 on 2022-05-27 19:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0019_subscriber_remove_field_blog_count_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='status',
            field=models.CharField(choices=[('Pending', 'Pending'), ('Active', 'Active'), ('Complete', 'Complete')], default='Pending', max_length=20, verbose_name='Project Status'),
        ),
    ]