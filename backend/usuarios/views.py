from django.shortcuts import render
from django.http import JsonResponse
from django.db import IntegrityError
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_exempt
from django.utils.datastructures import MultiValueDictKeyError
from django.contrib.auth.models import User
import json

# Create your views here.
@csrf_exempt
def register(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            username = data["username"]
            email = data["email"]
            password = data["password"]
            confirmation = data["confirmation"]
        except KeyError:
            return JsonResponse({"message": "Invalid JSON data."})

        if not username:
            return JsonResponse({"message": "Username is required."})

        if password != confirmation:
            return JsonResponse({"message": "Passwords must match."})

        try:
            user = User.objects.create_user(username, email, password)
            user.save()
        except IntegrityError:
            return JsonResponse({"message": "Username already taken."})

        login(request, user)
        return JsonResponse({"message": "Registration successful"})
    else:
        return JsonResponse({"message": "Only POST requests are allowed"}, status=405)
    
@csrf_exempt
def login_view(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            username = data["username"]
            password = data["password"]

            print(username, password)
        except KeyError:
            return JsonResponse({"message": "Invalid JSON data."})

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return JsonResponse({"message": "Login successful"})
        else:
            return JsonResponse({"message": "Invalid username and/or password."})

    else:
        return JsonResponse({"message": "Only POST requests are allowed"}, status=405)
    

def get_all_users(request):
    users = User.objects.all().values()
    return JsonResponse(list(users), safe=False)