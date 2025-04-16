from django.db import models

# Custom upload path function
def item_image_upload_path(instance, filename):
    # Optional: slugify the title to avoid issues with spaces/special characters
    from django.utils.text import slugify
    project_title = slugify(instance.project.title)
    return f"projects/{project_title}/{filename}"

# Project model
class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='parent/', blank=True, null=True)

    def __str__(self):
        return self.title

# Item model with custom upload path
class Item(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='items')
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to=item_image_upload_path)

    def __str__(self):
        return self.name
