# from django.shortcuts import render
from .models import *
from .serializers import *

# Create your views here.

from django.http import HttpResponse
from django.shortcuts import render
# from rest_framework.decorators import api_view
# from rest_framework.response import Response
from rest_framework import viewsets


def index(request):
    return render(request, 'index.html')

def contact(request):
    return render(request, 'contact.html')

# @api_view(['GET'])
# def view_all_schools(request):
#     schools = Schools.objects.all()
#     serializer = SchoolsSerializer(schools, many=True)
#     return Response(serializer.data)
#     # return render(request, 'school.html', {'schools':all_schools})


# class SchoolsViewSet(viewsets.ModelViewSet):
#     queryset = Schools.objects.all()
#     serializer_class = SchoolsSerializer


class CountyViewSet(viewsets.ModelViewSet):
    queryset = County.objects.all()
    serializer_class = CountySerializer

class PrimaryViewSet(viewsets.ModelViewSet):
    queryset = Primary.objects.all()
    serializer_class = PrimarySerializer

class PostPrimaryViewSet(viewsets.ModelViewSet):
    queryset = Post_Primary.objects.all()
    serializer_class = PosrPrimarySerializer

class SpecialViewSet(viewsets.ModelViewSet):
    queryset = Special.objects.all()
    serializer_class = SpecialSerializer

class TransportViewSet(viewsets.ModelViewSet):
    queryset = Transport.objects.all()
    serializer_class = TransportSerializer

class HouseViewSet(viewsets.ModelViewSet):
    queryset = House.objects.all() 
    serializer_class = HouseSerializer