from rest_framework import viewsets

from .models import Products
from .serializers import ProductoSerializer


class ProductsViewset(viewsets.ModelViewSet):
    queryset = Products.objects.all()
    serializer_class = ProductoSerializer
