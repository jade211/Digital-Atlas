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


class SchoolsViewSet(viewsets.ModelViewSet):
    queryset = Schools.objects.all()
    serializer_class = SchoolsSerializer