/* eslint-disable react/prop-types */

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PatientsUpdate({ data_raw, onSuccess }) {
  const [data, setData] = useState(data_raw);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { nom, prenom, date_de_naissance, sexe, adresse, telephone, email } =
      e.target;
    axios
      .put(`http://127.0.0.1:8000/api/patients/${data.patient_ID}/`, {
        nom: nom.value,
        prenom: prenom.value,
        date_de_naissance: date_de_naissance.value,
        sexe: sexe.value,
        adresse: adresse.value,
        num_tel: telephone.value,
        email: email.value,
      })
      .then(() => {
        navigate("/patients");
        onSuccess();
      });
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
          <label htmlFor="nom">Nom:</label>
          <input id="nom" name="nom" value={data.nom} onChange={handleChange} />

          <label htmlFor="prenom">Prenom:</label>
          <input
            id="prenom"
            name="prenom"
            value={data.prenom}
            onChange={handleChange}
          />

          <label htmlFor="dateNaissance">Date de Naissance:(YYYY-MM-DD)</label>
          <input
            id="dateNaissance"
            name="date_de_naissance"
            value={data.date_de_naissance}
            onChange={handleChange}
          />

          <label htmlFor="sexe">Sexe:</label>
          <select
            id="sexe"
            name="sexe"
            value={data.sexe}
            onChange={handleChange}
          >
            <option value="0">Male</option>
            <option value="1">Female</option>
          </select>

          <label htmlFor="adresse">Adresse:</label>
          <input
            id="adresse"
            name="adresse"
            value={data.adresse}
            onChange={handleChange}
          />

          <label htmlFor="telephone">Telephone:</label>
          <input
            id="telephone"
            name="telephone"
            value={data.num_tel}
            onChange={handleChange}
          />

          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default PatientsUpdate;
