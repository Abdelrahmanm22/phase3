from django.urls import path
from . import views

urlpatterns = [
    path('main/',views.main,name='main'),
    path('main/home/',views.home,name='home'),
    path('main/AddStudent/',views.AddStudent,name='AddStudent'),
    path('main/UpdateInfo/',views.UpdateInfo,name='UpdateInfo'),
    path('main/Department/',views.Department,name='Department'),
    path('main/Search/',views.Search,name='Search'),
    path('main/login/',views.login,name='login'),
]