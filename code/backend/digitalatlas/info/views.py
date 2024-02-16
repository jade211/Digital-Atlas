# from django.shortcuts import render
from .models import *
from .serializers import *

# Create your views here.

from django.http import HttpResponse
from django.shortcuts import render
# from rest_framework.decorators import api_view
# from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework import status
from django.core.mail import send_mail


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

class ExtraTransportViewSet(viewsets.ModelViewSet):
    queryset = Extra_Transport.objects.all()
    serializer_class = ExtraTransportSerializer

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    # def create(self, request, *args, **kwargs):
    #     serializer = self.get_serializer(data=request.data)
    #     serializer.is_valid(raise_exception=True)
    #     self.perform_create(serializer)
        
    #     # Get the validated data from serializer
    #     name = serializer.validated_data.get('name', '')
    #     email = serializer.validated_data.get('email', '')
    #     message = serializer.validated_data.get('message', '')

    #     # Send email
    #     try:
    #         send_mail(
    #             'Contact message',
    #             f'Name: {name}\nEmail: {email}\nMessage: {message}',
    #             'digitalatlas211@gmail.com',  # Sender's email
    #             ['digitalatlas211@gmail.com'],  # Recipient's email
    #             fail_silently=False,
    #         )
    #     except Exception as e:
    #         # Handle email sending failure
    #         return Response({'message': 'Failed to send email'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    #     return Response(serializer.data, status=status.HTTP_201_CREATED)