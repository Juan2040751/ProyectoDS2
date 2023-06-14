from django.db import models
from productos.models import Products 
from django.contrib.auth.models import User

class Cliente(models.Model):
    nombre = models.CharField(max_length=100)
    cedula = models.IntegerField(primary_key=True, default=0)
    
    def __str__(self):
        return self.nombre


class Factura(models.Model):
    vendedor = models.ForeignKey(User, on_delete=models.CASCADE)
    cliente = models.ForeignKey(Cliente, on_delete=models.SET_NULL, null=True, blank=True)
    fecha = models.DateField(auto_now_add=True)
    # Otros campos de la factura
    
    def __str__(self):
        return f"Factura #{self.id}"
    
class ProductosComprados(models.Model):
    factura = models.ForeignKey(Factura, on_delete=models.CASCADE, null=False, blank=True)
    producto = models.ForeignKey(Products, on_delete=models.SET_NULL, null=True, blank=False, related_name='productos')
    cantidad = models.IntegerField(default=1)
