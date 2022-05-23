# Generated by Django 4.0.4 on 2022-05-18 09:58

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import portfolio.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Blog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100, verbose_name='Post Title')),
                ('description', models.TextField(verbose_name='Post Description')),
                ('added_on', models.DateTimeField(default=django.utils.timezone.now, verbose_name='Upload On')),
                ('slug', models.SlugField(unique=True, verbose_name='Safe Url')),
                ('img_url', models.ImageField(upload_to=portfolio.models.get_file_path, verbose_name='Post Image')),
            ],
        ),
        migrations.CreateModel(
            name='Field',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30, verbose_name='Technology Field name')),
                ('project_count', models.IntegerField(default=0, verbose_name='Related Projects')),
                ('blog_count', models.IntegerField(default=0, verbose_name='Related Blog Articles')),
                ('added_on', models.DateTimeField(default=django.utils.timezone.now, verbose_name='Posted On')),
            ],
        ),
        migrations.CreateModel(
            name='Stack',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30, verbose_name='Technology name')),
                ('project_count', models.IntegerField(default=0, verbose_name='Related Projects')),
                ('blog_count', models.IntegerField(default=0, verbose_name='Related Blog Articles')),
                ('added_on', models.DateTimeField(default=django.utils.timezone.now, verbose_name='Posted On')),
            ],
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100, verbose_name='Post Title')),
                ('description', models.TextField(verbose_name='Post Description')),
                ('added_on', models.DateTimeField(default=django.utils.timezone.now, verbose_name='Upload On')),
                ('slug', models.SlugField(unique=True, verbose_name='Safe Url')),
                ('img_url', models.ImageField(upload_to=portfolio.models.get_file_path, verbose_name='Post Image')),
                ('field', models.ManyToManyField(to='portfolio.field')),
                ('stack', models.ManyToManyField(to='portfolio.stack')),
            ],
        ),
        migrations.CreateModel(
            name='BlogComment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment', models.CharField(max_length=100, verbose_name='Post Comment')),
                ('added_on', models.DateTimeField(default=django.utils.timezone.now, verbose_name='Posted On')),
                ('blog', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='portfolio.blog')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='blog',
            name='field',
            field=models.ManyToManyField(to='portfolio.field'),
        ),
        migrations.AddField(
            model_name='blog',
            name='stack',
            field=models.ManyToManyField(to='portfolio.stack'),
        ),
    ]