import axios from "axios";
import Navbar from "../../shared/Navbar/Navbar";

import "./Patients.css";
import { useNavigate } from "react-router";

function PatientsAdd() {
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
    } = e.target;
    axios.post("http://127.0.0.1:8000/api/patients/",{
      nom:nom.value,
      prenom:prenom.value,
      date_de_naissance:date_de_naissance.value,
      sexe:sexe.value,
      adresse:adresse.value,
      num_tel:telephone.value,
      email:email.value,
    }).then(()=>{
      navigate("/patients");
    })
  };
  return (
    <div>
      <Navbar />
      <div className="medecins-add-container">
        <form className="medecins-add-form" onSubmit={handleSubmit}>
          <label htmlFor="nom">Nom:</label>
          <input id="nom" name="nom" />

          <label htmlFor="prenom">Prenom:</label>
          <input id="prenom" name="prenom" />

          <label htmlFor="dateNaissance">Date de Naissance:(YYYY-MM-DD)</label>
          <input id="dateNaissance" name="date_de_naissance" />

          <label htmlFor="sexe">Sexe:</label>
          <select id="sexe" name="sexe">
            <option value="0">Male</option>
            <option value="1">Female</option>
          </select>

          <label htmlFor="adresse">Adresse:</label>
          <input id="adresse" name="adresse" />

          <label htmlFor="telephone">Telephone:</label>
          <input id="telephone" name="telephone" />

          <label htmlFor="email">Email:</label>
          <input id="email" name="email" />

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default PatientsAdd;
