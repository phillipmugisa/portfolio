from rest_framework.test import TestCase
from django.urls import reverse
from rest_framework import status

class TestApi(TestCase):
    def test_projects_endpoint(self):
        response = self.client.get(reverse('projects'))

        self.assertEqual(response.status_code, status.HTTP_200_OK)