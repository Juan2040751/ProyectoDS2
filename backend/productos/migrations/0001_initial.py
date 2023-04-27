# Generated by Django 4.2 on 2023-04-26 22:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Products',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('description', models.TextField(blank=True)),
                ('price', models.IntegerField()),
                ('manufacturer', models.CharField(max_length=150)),
                ('weight', models.DecimalField(decimal_places=5, max_digits=20)),
                ('category', models.TextField(blank=True)),
            ],
        ),
    ]
