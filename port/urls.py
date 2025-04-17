from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import ProjectView, ItemView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('projects/', ProjectView.as_view(), name='project-list'),
    path('items/', ItemView.as_view(), name='item-list'),
    path('projects/<int:pk>/', ProjectView.as_view(), name='project-detail'),
    path('items/<int:pk>/', ItemView.as_view(), name='item-detail'),

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)