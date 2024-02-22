# Create your tests here.

import os
from django.conf import settings

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'digitalatlas.settings')

import pytest
from django.urls import reverse
from rest_framework.test import APIClient
from .models import *
from .serializers import *

@pytest.fixture
def api_client():
    return APIClient()

@pytest.mark.django_db
def test_transport_list(api_client):
    url = reverse('transport-list')
    response = api_client.get(url)
    assert response.status_code == 200

@pytest.mark.django_db
def test_house_list(api_client):
    url = reverse('house-list')
    response = api_client.get(url)
    assert response.status_code == 200

@pytest.mark.django_db
def test_extra_transport_list(api_client):
    url = reverse('extra_transport-list')
    response = api_client.get(url)
    assert response.status_code == 200



