from django.conf.urls import patterns, url
from upd_settings import views

urlpatterns = patterns('',
        url(r'^$', views.index, name='index'))
