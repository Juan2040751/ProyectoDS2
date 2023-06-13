from django.db import models
from productos.models import Products 
from django.contrib.auth.models import User

class Cliente(models.Model):
    nombre = models.CharField(max_length=100)
    cedula = models.IntegerField()
    
    def __str__(self):
        return self.nombre

class Factura(models.Model):
    vendedor = models.ForeignKey(User, on_delete=models.CASCADE)
    cliente = models.ForeignKey(Cliente, on_delete=models.SET_NULL, null=True, blank=True)
    productos = models.ManyToManyField(Products)
    fecha = models.DateField(auto_now_add=True)
    # Otros campos de la factura
    
    def __str__(self):
        return f"Factura #{self.id}"
