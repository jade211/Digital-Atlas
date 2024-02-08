from django.db import models

# Create your models here.

# class Schools(models.Model):
#     id = models.AutoField(primary_key=True)
#     county = models.CharField(max_length=25)
#     primary = models.IntegerField()
#     post_primary = models.IntegerField()
#     special = models.IntegerField()


class County(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)

class Primary(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=75)
    address = models.TextField()
    county = models.ForeignKey(County, on_delete=models.CASCADE)


class Post_Primary(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=75)
    address = models.TextField()
    county = models.ForeignKey(County, on_delete=models.CASCADE) 
       
class Special(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=75)
    address = models.TextField()
    county = models.ForeignKey(County, on_delete=models.CASCADE)

class Transport(models.Model):
    id = models.AutoField(primary_key=True)
    bus = models.CharField(max_length=10)
    route_from = models.CharField(max_length=100)
    route_to = models.CharField(max_length=100)