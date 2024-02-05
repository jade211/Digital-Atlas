# serializers.py created inside your app folder
from rest_framework import serializers
from .models import *


class SchoolsSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Schools
		fields = ['id','county', 'primary', 'post_primary', 'special']