from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

# urlpatterns = [
#    path('', index, name="index"),
#    path('contact', contact, name='contact'),
#    path('index', index, name="index"),
#    path('api/schools', view_all_schools, name='schools'),
# ]

router = DefaultRouter()
# router.register(r'schools', SchoolsViewSet)
router.register(r'county', CountyViewSet)
router.register(r'primary', PrimaryViewSet)
router.register(r'post_primary', PostPrimaryViewSet)
router.register(r'special', SpecialViewSet)
router.register(r'transport', TransportViewSet)
router.register(r'house', HouseViewSet)
router.register(r'extra_transport', ExtraTransportViewSet)


urlpatterns = [
    path('', include(router.urls)),
]

