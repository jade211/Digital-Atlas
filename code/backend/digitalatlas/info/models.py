from django.db import models

# Create your models here.

class Schools(models.Model):
    id = models.AutoField(primary_key=True)
    county = models.CharField(max_length=25)
    primary = models.IntegerField()
    post_primary = models.IntegerField()
    special = models.IntegerField()