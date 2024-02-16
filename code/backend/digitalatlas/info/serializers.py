# serializers.py created inside your app folder
from rest_framework import serializers
from .models import *


# class SchoolsSerializer(serializers.HyperlinkedModelSerializer):
# 	class Meta:
# 		model = Schools
# 		fields = ['id','county', 'primary', 'post_primary', 'special']


class CountySerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = County
		fields = ['id','name']



class PrimarySerializer(serializers.HyperlinkedModelSerializer):
    county_name = serializers.CharField(source='county.name', read_only=True)
    class Meta:
        model = Primary
        fields = ['id','name', 'address', 'county', 'county_name']


class PosrPrimarySerializer(serializers.HyperlinkedModelSerializer):
    county_name = serializers.CharField(source='county.name', read_only=True)
    class Meta:
        model = Post_Primary
        fields = ['id','name', 'address', 'county', 'county_name']


class SpecialSerializer(serializers.HyperlinkedModelSerializer):
    county_name = serializers.CharField(source='county.name', read_only=True)
    class Meta:
        model = Special
        fields = ['id','name', 'address', 'county', 'county_name']

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

class ContactSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Contact
        fields  = ['name', 'email', 'message', 'timestamp']