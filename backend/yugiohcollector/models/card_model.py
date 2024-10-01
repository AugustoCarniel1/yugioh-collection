from django.db import models


class Card(models.Model):
    id = models.AutoField(primary_key=True)
    konami_id = models.CharField(max_length=10)
    attribute = models.ForeignKey('Attribute', on_delete=models.CASCADE)
    card_type = models.ForeignKey('CardType', on_delete=models.CASCADE)
    attack = models.IntegerField(null=True)
    defense = models.IntegerField(null=True)
    level = models.IntegerField(null=True)
    link_value = models.IntegerField(null=True)
    link_arrows = models.IntegerField(null=True)  # Usando bitmask para armazenar as direções
    pendulum_scale = models.IntegerField(null=True)
    archetype = models.CharField(max_length=64, null=True)
    image = models.ImageField(upload_to='card_images/')
    small_image = models.ImageField(upload_to='small_card_images/')

    # Direções (Setas)
    UP = 1
    UP_RIGHT = 2
    RIGHT = 4
    DOWN_RIGHT = 8
    DOWN = 16
    DOWN_LEFT = 32
    LEFT = 64
    UP_LEFT = 128


class CardTranslation(models.Model):
    card = models.ForeignKey('Card', on_delete=models.CASCADE, related_name='translation')
    language = models.CharField(max_length=10, choices=[
        ('pt', 'Portuguese'),
        ('en', 'English'),
        ('de', 'German'),
        ('it', 'Italian'),
        ('fr', 'French')
    ])
    name = models.CharField(max_length=128)
    description = models.TextField()
    subtype = models.CharField(max_length=64)


class Attribute(models.Model):
    id = models.AutoField(primary_key=True)
    description = models.CharField(max_length=10)


class Archetype(models.Model):
    id = models.AutoField(primary_key=True)
    description = models.CharField(max_length=64)


class CardType(models.Model):
    id = models.AutoField(primary_key=True)
    description = models.CharField(max_length=64)