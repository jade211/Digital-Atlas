from django.db import models
from django.core.mail import send_mail

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
    
class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    timestamp = models.DateField(auto_now_add=True)
    
    def __str__(self):
        return self.message
    
    # def save(self, *args, **kwargs):
    #     send_mail(
    #         'Contact message',
    #         'Here is my message',
    #         'digitalatlas211@gmail.com',
    #         [self.email],
    #         fail_silently=False,
    #         html_message=f"<p>{self.name}</p><p>Message: {self.message}</p>"
    #     )
    #     return super(Contact, self).save(*args, **kwargs)