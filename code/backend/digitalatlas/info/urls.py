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
router.register(r'schools', SchoolsViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
