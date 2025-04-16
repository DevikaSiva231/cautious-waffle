from rest_framework import serializers
from .models import Project, Item

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model=Project
        fields='__all__'

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model=Item
        fields='__all__'
