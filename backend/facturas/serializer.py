from rest_framework import serializers
from .models import Factura, Cliente, ProductosComprados
from django.db import transaction

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ["nombre", "cedula"]

class ProductosCompradosSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductosComprados
        fields = ["factura", "producto", "cantidad"]

class FacturaSerializer(serializers.ModelSerializer):
    productos = ProductosCompradosSerializer(many=True, read_only=False)

    class Meta:
        model = Factura
        fields = ("vendedor", "cliente", "productos")
    
    def create(self, validated_data):
        with transaction.atomic():
            factura = Factura.objects.create(

            )
        return factura