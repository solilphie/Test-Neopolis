from django.db import models
from django.utils import timezone
from django.conf import settings


#job post
class Post(models.Model):

    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset() .filter(status='published')

    options = (
        ('draft', 'Draft'),
        ('published', 'Published'),
    )
    
    
    
    titre = models.CharField(max_length=250)
    date = models.DateTimeField()
    upload = models.ImageField(upload_to ='uploads/')
    description = models.TextField()
    eventtype=(('sportif','SPORTIF'),('Culturel','Culturel'))
    eventtypes=models.CharField(max_length=300,choices=eventtype, default='sportif')
    published = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, )

    status = models.CharField(
        max_length=10, choices=options, default='published')
    objects = models.Manager()  # default manager
    postobjects = PostObjects()  # custom manager

    class Meta:
        ordering = ('-published',)

    def _str_(self):
        return self.title