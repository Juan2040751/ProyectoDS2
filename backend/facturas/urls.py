from django.urls import path
from rest_framework import routers

from .views import FacturaViewset

router = routers.DefaultRouter()
router.register('', FacturaViewset, basename='facturas')
urlpatterns = router.urls