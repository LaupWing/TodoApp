from django.db import models

class User(models.Model):
    email = models.CharField(max_length=200)
    password= models.CharField(max_length=200)

# Create your models here.
class Todo(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    todo = models.CharField(max_length=300)
    complete = models.BooleanField(default=False)

    def __str__(self):
        return self.todo