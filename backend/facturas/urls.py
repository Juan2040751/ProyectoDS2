from django.urls import path
from rest_framework import routers

from .views import FacturaViewset, ClienteViewset

router = routers.DefaultRouter()
router.register('', FacturaViewset, basename='facturas')
router.register('clientes/', ClienteViewset, basename='Clientes')
urlpatterns = router.urls