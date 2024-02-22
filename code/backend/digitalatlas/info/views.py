# from django.shortcuts import render
from .models import *
from .serializers import *
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import status
from django.core.mail import send_mail


class TransportViewSet(viewsets.ModelViewSet):
    queryset = Transport.objects.all()
    serializer_class = TransportSerializer

class HouseViewSet(viewsets.ModelViewSet):
    queryset = House.objects.all() 
    serializer_class = HouseSerializer

class ExtraTransportViewSet(viewsets.ModelViewSet):
    queryset = Extra_Transport.objects.all()
    serializer_class = ExtraTransportSerializer
