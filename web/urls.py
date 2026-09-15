from django.urls import path

from usuarios.urls import app_name
from web import views

app_name  = 'web'

urlpatterns = [
    path('', views.home, name='home'),
    path('/contato',views.contato, name='contato'),
]