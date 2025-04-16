from django.shortcuts import render
from rest_framework import generics
from .models import Project, Item


# Create your views here.
class ProjectView(generics.ListCreateAPIView):
    quesryset=Project.objects.all()
    serializer_set=ProjectSerializer
