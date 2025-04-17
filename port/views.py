from django.shortcuts import render
from rest_framework import generics
from .models import Project, Item
from .serializers import ProjectSerializer, ItemSerializer


# Create your views here.
class ProjectView(generics.ListCreateAPIView):
    queryset=Project.objects.all()
    serializer_class=ProjectSerializer

class ItemView(generics.ListCreateAPIView):
    queryset=Item.objects.all()
    serializer_class=ItemSerializer

