from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(response):
    return render(response, "main/home.html", {})

def login(response):
    return render(response, "main/login.html", {})
def signup(response):
    return render(response, "main/signup.html", {})