from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractUser
import uuid
import os

def get_file_path(instance, filename):
    fullname = instance.get_full_name()

    ext = filename.split('.')[-1]
    filename = "%s-%s.%s" % (fullname ,uuid.uuid4(), ext)
    return os.path.join('images/users', filename)

class User(AbstractUser):
    img_url = models.ImageField(
        verbose_name=_('Profile Image'),
        upload_to=get_file_path
    )

    def __str__(self) -> str:
        if not self.get_full_name():
            return self.get_username()
        return self.get_full_name()