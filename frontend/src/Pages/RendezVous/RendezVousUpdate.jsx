/* eslint-disable react/prop-types */
import axios from "axios";

import "./RendezVous.css";
import { useNavigate } from "react-router";
import { useState } from "react";

function RendezVousUpdate({data_raw, onSuccess}) {
  const [data, setData] = useState(data_raw)
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
    axios.put("http://127.0.0.1:8000/api/RendezVous/",{
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
      onSuccess()
    })
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="medecins-add-container">
        <form className="medecins-add-form" onSubmit={handleSubmit}>
          <label htmlFor="date">Date: (YYYY-MM-DD)</label>
          <input id="date" name="date" value={data.date} onChange={handleChange}/>

          <label htmlFor="heure">Heure: (HH:MM:SS)</label>
          <input id="heure" name="heure" value={data.heure} onChange={handleChange}/>

          <label htmlFor="patient">ID Patient:</label>
          <input id="patient" name="patient" value={data.patient} onChange={handleChange}/>

          <label htmlFor="medecin">ID Medecin:</label>
          <input id="medecin" name="medecin" value={data.medecin}  onChange={handleChange}/>
          
          <label htmlFor="service">Service: </label>
          <select id="service" name="service" value={data.service}  onChange={handleChange}>
            <option value="1">Cardiologue</option>
            <option value="2">Neurologue</option>
            <option value="3">Urologue</option>
            <option value="4">Rhumatologue</option>
            <option value="5">ORL</option>
            <option value="6">Generaliste</option>
          </select>

          <label htmlFor="titre">Titre: </label>
          <input id="titre" name="titre" value={data.titre}  onChange={handleChange}/>

          <label htmlFor="consultation">Consultation: (laisser vide si il s&apos;agit d&apos;une operation)</label>
          <input id="consultation" name="consultation" value={data.consultation}  onChange={handleChange}/>

          <label htmlFor="operation">Operation: (laisser vide si il s&apos;agit d&apos;une consultation)</label>
          <input id="operation" name="operation" value={data.operation}  onChange={handleChange}/>

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default RendezVousUpdate;
