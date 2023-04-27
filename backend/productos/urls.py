from django.urls import path
from rest_framework import routers

from .api import *


router = routers.DefaultRouter()
router.register('', ProductsViewset, basename='Products')

urlpatterns = router.urls