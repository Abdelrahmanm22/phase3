from django.shortcuts import render

# Create your views here.

def main(request):
    return render(request,'pages/main.html')


def home(request):
    return render(request,'pages/home.html')

def AddStudent(request):
    return render(request,'pages/AddStudent.html')


def UpdateInfo(request):
    return render(request,'pages/UpdateInfo.html')


def Department(request):
    return render(request,'pages/Department.html')

def Search(request):
    return render(request,'pages/Search.html')

def login(request):
    return render(request,'pages/login.html')
