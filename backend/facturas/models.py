from django.db import models

class Vendedor(models.Model):
    nombre = models.CharField(max_length=100)
    # Otros campos del vendedor
    
    def __str__(self):
        return self.nombre

class Cliente(models.Model):
    nombre = models.CharField(max_length=100)
    # Otros campos del cliente
    
    def __str__(self):
        return self.nombre


class Factura(models.Model):
    vendedor = models.ForeignKey(Vendedor, on_delete=models.CASCADE)
    cliente = models.ForeignKey(Cliente, on_delete=models.SET_NULL, null=True, blank=True)
    productos = models.ManyToManyField(Producto)
    fecha = models.DateField(auto_now_add=True)
    # Otros campos de la factura
    
    def __str__(self):
        return f"Factura #{self.id}"
