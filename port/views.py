from django.shortcuts import render # noqa
from rest_framework import generics
from .models import Project, Item
from .serializers import ProjectSerializer, ItemSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view


@api_view(['GET'])
def hello(request):
    return Response({"message": "Hello from Django!"})


# Create your views here.
class ProjectView(generics.ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class ItemView(generics.ListCreateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
