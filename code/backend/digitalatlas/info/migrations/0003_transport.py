# Generated by Django 4.1.5 on 2024-02-08 23:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('info', '0002_county_post_primary_primary_special_delete_schools'),
    ]

    operations = [
        migrations.CreateModel(
            name='Transport',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('bus', models.IntegerField()),
                ('route_from', models.CharField(max_length=100)),
                ('route_to', models.CharField(max_length=100)),
            ],
        ),
    ]
