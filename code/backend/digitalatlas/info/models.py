from django.db import models
from django.core.mail import send_mail

# Create your models here.

class Transport(models.Model):
    id = models.AutoField(primary_key=True)
    bus = models.CharField(max_length=10)
    route_from = models.CharField(max_length=100)
    route_to = models.CharField(max_length=100)
    county = models.CharField(max_length=50, default='Dublin')

class House(models.Model):
    id = models.AutoField(primary_key=True)
    year = models.IntegerField()
    area = models.CharField(max_length=50)
    price = models.CharField(max_length=50)

class Extra_Transport(models.Model):
    id = models.AutoField(primary_key=True)
    bus = models.CharField(max_length=10)
    route_from = models.CharField(max_length=100)
    route_to = models.CharField(max_length=100)
    county = models.CharField(max_length=50)
