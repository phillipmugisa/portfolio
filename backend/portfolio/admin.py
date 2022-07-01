from django.contrib import admin
from portfolio import models

admin.site.register(models.Project)
admin.site.register(models.Blog)
admin.site.register(models.Stack)
admin.site.register(models.Field)
admin.site.register(models.Subscriber)

admin.site.register(models.BlogComment)
admin.site.register(models.BlogReaction)