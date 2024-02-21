# serializers.py created inside your app folder
from rest_framework import serializers
from .models import *

class TransportSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Transport
        fields  = ['id', 'bus', 'route_from', 'route_to', 'county']


class HouseSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = House
        fields = ['id', 'year', 'area', 'price']

class ExtraTransportSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Extra_Transport
        fields  = ['id', 'bus', 'route_from', 'route_to', 'county']
