# Generated by Django 3.0.6 on 2020-05-10 17:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('challenge', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='cell',
            name='flagged',
            field=models.BooleanField(default=False, help_text='Indicates if the cell has been flagged'),
        ),
    ]
