from rest_framework import  viewsets
from .serializer import FacturaSerializer, ClienteSerializer
from .models import Factura, Cliente

# Create your views here.
class FacturaViewset(viewsets.ModelViewSet):
    queryset = Factura.objects.all()
    serializer_class = FacturaSerializer

class ClienteViewset(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer 