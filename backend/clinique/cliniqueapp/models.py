from django.db import models
from django_enumfield import enum
from django.utils import timezone
from dateutil.relativedelta import relativedelta
from django.core.exceptions import ValidationError
from datetime import datetime

# Create your models here.

class Sexe(enum.Enum):
  homme = 0
  femme = 1

class Specialite(enum.Enum):
    Cardiologue = 1
    Neurologue = 2
    Urologue = 3
    Rhumatologue = 4
    ORL = 5
    Generaliste = 6

class Medecin(models.Model):
  medecin_ID = models.AutoField(primary_key=True)
  nom = models.CharField(max_length=30)
  prenom = models.CharField(max_length=30)
  date_de_naissance = models.DateField()
  sexe = enum.EnumField(Sexe)
  adresse = models.CharField(max_length = 70)
  telephone = models.IntegerField()
  email = models.EmailField(default = "email@amodifier.com")
  specialite = enum.EnumField(Specialite)

class Patient(models.Model):
  patient_ID = models.AutoField(primary_key=True)
  nom = models.CharField(max_length=(50))
  prenom = models.CharField(max_length=(50))
  date_de_naissance = models.DateField(default='2000-01-01')
  sexe = enum.EnumField(Sexe)
  adresse = models.CharField(max_length=(50))
  num_tel = models.IntegerField(default=0)
  email = models.EmailField(default="test@domain.com")
  @property
  def age(self):
    print(f"{self.date_de_naissance} type: {type(self.date_de_naissance)}")
    if type(self.date_de_naissance) == str:
      self.date_de_naissance = datetime.strptime(self.date_de_naissance, '%Y-%m-%d')
    date_naissance_datetime = datetime.combine(self.date_de_naissance, datetime.min.time())
    date_naissance_aware = timezone.make_aware(date_naissance_datetime)
    return relativedelta(timezone.now(), date_naissance_aware).years


class Salle_Consultation(models.Model):
  ID_Salle = models.AutoField(primary_key=True)
  Numero_de_salle = models.IntegerField(default=0)
  Disponibilite = models.BooleanField(default=False)


class Consultation (models.Model):
  consultation_ID =models.AutoField(primary_key=True)
  est_passer = models.BooleanField(default=False)
  salle = models.ForeignKey(Salle_Consultation,on_delete=models.CASCADE,null=True)
  diagnostic = models.CharField(max_length=(50))
  traitement = models.CharField(max_length=(50))
  commentaire = models.CharField(max_length=(50))

class Salle_Operation(models.Model):
  salle_ID = models.AutoField(primary_key=True)
  numero_de_salle = models.IntegerField(default=0)
  disponibilite = models.BooleanField(default=False)

class Operation(models.Model):
  operation_ID = models.AutoField(primary_key=True)
  estPasser = models.BooleanField(default=False)
  type = models.CharField(max_length=200)
  salle = models.ForeignKey(Salle_Operation, on_delete=models.CASCADE)

class RDV(models.Model):
  RDV_ID = models.AutoField(primary_key=True)
  date = models.DateField(default='2000-01-01')
  heure = models.TimeField(default='00:00:00')
  patient = models.ForeignKey(Patient,on_delete=models.CASCADE)
  medecin = models.ForeignKey(Medecin,on_delete=models.CASCADE)
  service = enum.EnumField(Specialite)
  titre = models.CharField(max_length=(50),default="Consultation")
  consultation = models.ForeignKey(Consultation,on_delete=models.CASCADE,null=True,blank=True)
  operation = models.ForeignKey(Operation,on_delete=models.CASCADE,null=True,blank=True)

  def save(self, *args, **kwargs):
    self.service = self.Medecin.specialite
    if self.consultation and self.operation:
      raise ValidationError("Un rendez-vous ne peut pas avoir à la fois une consultation et une opération.")
    if not self.consultation and not self.operation:
      raise ValidationError("Un rendez-vous doit avoir soit une consultation soit une opération.")
    super().save(*args, **kwargs)

class DossierMedical(models.Model):
  dossier_ID = models.AutoField(primary_key=True)
  patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
  dateCreation = models.DateField(auto_now_add=True, null=True, blank=True)
  antecedents = models.TextField(blank=True)
  allergies = models.TextField(blank=True)
  consultations = models.ManyToManyField(Consultation, blank=True)
  operations = models.ManyToManyField(Operation, blank=True)

class Observation(models.Model):
  observation_ID = models.AutoField(primary_key=True)
  patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
  medecin = models.ForeignKey(Medecin, on_delete=models.CASCADE)
  dateCreation = models.DateField(auto_now_add=True)
  remarques = models.TextField()
  