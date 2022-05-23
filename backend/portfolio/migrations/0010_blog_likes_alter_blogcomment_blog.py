# Generated by Django 4.0.4 on 2022-05-22 15:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0009_alter_blogcomment_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='likes',
            field=models.IntegerField(default=0, verbose_name='Number of likes'),
        ),
        migrations.AlterField(
            model_name='blogcomment',
            name='blog',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comment', to='portfolio.blog'),
        ),
    ]
