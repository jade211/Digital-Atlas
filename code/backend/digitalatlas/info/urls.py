from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register(r'transport', TransportViewSet)
router.register(r'house', HouseViewSet)
router.register(r'extra_transport', ExtraTransportViewSet)


urlpatterns = [
    path('', include(router.urls)),
]

