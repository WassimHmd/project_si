/* eslint-disable react/prop-types */

import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function MedecinsUpdate({data_raw, onSuccess}) {
  const [data, setData] = useState(data_raw)
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      nom,
      prenom,
      date_de_naissance,
      sexe,
      adresse,
      telephone,
      email,
      specialite,
    } = e.target;
    axios.put(`http://127.0.0.1:8000/api/Medecins/${data.medecin_ID}/`,{
      nom:nom.value,
      prenom:prenom.value,
      date_de_naissance:date_de_naissance.value,
      sexe:sexe.value,
      adresse:adresse.value,
      telephone:telephone.value,
      email:email.value,
      specialite:specialite.value,
    }).then(()=>{
      navigate("/medecins");
      console.log("normalement temchi")
      onSuccess()
    })
  };

  const handleChange = (e)=>{
    const { name, value } = e.target;
    setData((prevFormValues) => ({
      ...prevFormValues,
      [name]: value
    }));
  }

  return (
    <div>
     <div className="medecins-add-container">
        <form className="medecins-add-form" onSubmit={handleSubmit}>
          <label htmlFor="nom">Nom:</label>
          <input id="nom" name="nom" value={data.nom} onChange={handleChange}/>

          <label htmlFor="prenom">Prenom:</label>
          <input id="prenom" name="prenom" value={data.prenom} onChange={handleChange}/>

          <label htmlFor="dateNaissance">Date de Naissance:(YYYY-MM-DD)</label>
          <input id="dateNaissance" name="date_de_naissance" value={data.date_de_naissance} onChange={handleChange}/>

          <label htmlFor="sexe">Sexe:</label>
          <select id="sexe" name="sexe" value={data.sexe} onChange={handleChange}>
            <option value="0">Male</option>
            <option value="1">Female</option>
          </select>

          <label htmlFor="adresse">Adresse:</label>
          <input id="adresse" name="adresse" value={data.adresse} onChange={handleChange}/>

          <label htmlFor="telephone">Telephone:</label>
          <input id="telephone" name="telephone" value={data.telephone} onChange={handleChange}/>

          <label htmlFor="email">Email:</label>
          <input id="email" name="email" value={data.email} onChange={handleChange}/>

          <label htmlFor="specialite">Specialite:</label>
          <select id="specialite" name="specialite" value={data.specialite} onChange={handleChange}>
            <option value="1">Cardiologue</option>
            <option value="2">Neurologue</option>
            <option value="3">Urologue</option>
            <option value="4">Rhumatologue</option>
            <option value="5">ORL</option>
            <option value="6">Generaliste</option>
          </select>
          <button>Submit</button>
        </form>
      </div>
    </div> 
    
  )
}

export default MedecinsUpdate
