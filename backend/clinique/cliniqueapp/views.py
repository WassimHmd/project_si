from rest_framework import viewsets
from .serializers import PatientSerializer,MedecinSerializer,RDVSerializer, ObservationSerializer
from .models import Patient,Medecin,RDV, Observation
from rest_framework import viewsets


class RDVView(viewsets.ModelViewSet):
  serializer_class = RDVSerializer
  queryset = RDV.objects.all()
  
class MedecinView(viewsets.ModelViewSet):
  serializer_class = MedecinSerializer
  queryset= Medecin.objects.all()

class PatientView(viewsets.ModelViewSet):
    serializer_class = PatientSerializer
    queryset = Patient.objects.all()

class ObservationView(viewsets.ModelViewSet):
   serializer_class = ObservationSerializer
   queryset = Observation.objects.all()