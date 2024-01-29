import axios from "axios";
import Navbar from "../../shared/Navbar/Navbar";

import "./RendezVous.css";
import { useNavigate } from "react-router";

function RendezVousAdd() {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      date,
      heure,
      patient,
      medecin,
      service,
      titre,
      consultation,
      operation,
    } = e.target;
    axios.post("http://127.0.0.1:8000/api/RendezVous/",{
      date:date.value,
      heure:heure.value,
      patient:patient.value,
      medecin:medecin.value,
      service:service.value,
      titre:titre.value,
      consultation:consultation.value,
      operation:operation.value,
    }).then(()=>{
      navigate("/rendezvous");
    })
  };
  return (
    <div>
      <Navbar />
      <div className="medecins-add-container">
        <form className="medecins-add-form" onSubmit={handleSubmit}>
          <label htmlFor="date">Date: (YYYY-MM-DD)</label>
          <input id="date" name="date" />

          <label htmlFor="heure">Heure: (HH:MM:SS)</label>
          <input id="heure" name="heure" />

          <label htmlFor="patient">ID Patient:</label>
          <input id="patient" name="patient" />

          <label htmlFor="medecin">ID Medecin:</label>
          <input id="medecin" name="medecin" />
          
          <label htmlFor="service">Service: </label>
          <select id="service" name="service">
            <option value="1">Cardiologue</option>
            <option value="2">Neurologue</option>
            <option value="3">Urologue</option>
            <option value="4">Rhumatologue</option>
            <option value="5">ORL</option>
            <option value="6">Generaliste</option>
          </select>

          <label htmlFor="titre">Titre: </label>
          <input id="titre" name="titre" />

          <label htmlFor="consultation">Consultation: (laisser vide si il s&apos;agit d&apos;une operation)</label>
          <input id="consultation" name="consultation" />

          <label htmlFor="operation">Operation: (laisser vide si il s&apos;agit d&apos;une operation)</label>
          <input id="operation" name="operation" />

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default RendezVousAdd;
