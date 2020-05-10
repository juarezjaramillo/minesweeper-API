"""minesweeperAPI URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# from django.contrib import admin
from django.conf.urls import url
from django.urls import path, include
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import routers

from challenge import views

api_info = openapi.Info(
    title="Minesweeper API",
    default_version='v1',
    description="A simple Minesweeper API for Deviget code challengue",
    terms_of_service="https://www.google.com/policies/terms/",
    contact=openapi.Contact(email="https://github.com/juarezjaramillo"),
    license=openapi.License(name="BSD License")
)
schema_view = get_schema_view(
    api_info,
    url="http://www.example.com",
    public=True,
    authentication_classes=None,
    permission_classes=None
)

router = routers.SimpleRouter(trailing_slash=False)

router.register(r'boards', views.BoardApi)

urlpatterns = [
    path('', views.index, name='index'),
    url(r'api/', include(router.urls)),
    url(r'^api-docs/swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    url(r'^api-docs/swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    url(r'^api-docs/redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    #    path('admin/', admin.site.urls),
]
