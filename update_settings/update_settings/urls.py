from django.conf.urls import patterns, include, url
from django.contrib import admin
from upd_settings import views

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'update_settings.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
     url(r'^upd_settings/', include('upd_settings.urls')),
)
