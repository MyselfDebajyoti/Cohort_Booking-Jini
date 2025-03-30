from django.urls import path
from .views import generate_image, generate_post_api, finalize_post_api, get_final_post_api, schedule_post_api
urlpatterns = [
    path('api/generate-post/', generate_post_api, name='generate-post'),
    path('api/finalize-post/', finalize_post_api, name='finalize-post'),
    path('api/final-post/', get_final_post_api, name='final-post'),
    path('api/generate-image/', generate_image, name="generate_image"),
    path('api/schedule-post/', schedule_post_api, name='schedule-post'),
]





