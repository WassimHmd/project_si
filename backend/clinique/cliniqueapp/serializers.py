from .models import Patient, Medecin, RDV, Observation
from rest_framework import serializers
# Create your views here.

class RDVSerializer(serializers.ModelSerializer):
  class Meta:
    model = RDV
    fields = ('RDV_ID', 'date', 'heure', 'patient', 'medecin', 'service', 'titre', 'consultation', 'operation')

class ObservationSerializer(serializers.ModelSerializer):
  class Meta:
    model = Observation
    fields = ('observation_ID', 'patient', 'medecin', 'dateCreation', 'remarques')
  
class MedecinSerializer(serializers.ModelSerializer):
  class Meta:
    model = Medecin
    fields = ('medecin_ID', 'nom', 'prenom', 'date_de_naissance', 'sexe', 'adresse', 'telephone', 'email', 'specialite')

class PatientSerializer(serializers.ModelSerializer):
  class Meta:
    model = Patient
    fields = ('patient_ID', 'nom', 'prenom', 'date_de_naissance', 'sexe', 'adresse', 'num_tel', 'email', 'age')

