# Generated by Django 4.1.5 on 2024-02-21 19:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('info', '0008_contact'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Contact',
        ),
        migrations.RemoveField(
            model_name='post_primary',
            name='county',
        ),
        migrations.RemoveField(
            model_name='primary',
            name='county',
        ),
        migrations.RemoveField(
            model_name='special',
            name='county',
        ),
        migrations.DeleteModel(
            name='County',
        ),
        migrations.DeleteModel(
            name='Post_Primary',
        ),
        migrations.DeleteModel(
            name='Primary',
        ),
        migrations.DeleteModel(
            name='Special',
        ),
    ]
