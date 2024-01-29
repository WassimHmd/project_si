/* eslint-disable react/prop-types */
import axios from "axios";

import "./Observations.css";
import { useNavigate } from "react-router";
import { useState } from "react";

function ObservationsUpdate({data_raw, onSuccess}) {
  const [data, setData] = useState(data_raw)
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      patient,
      medecin,
      remarques
    } = e.target;
    axios.put(`http://127.0.0.1:8000/api/Observations/${data.observation_ID}/`,{
      
      patient:patient.value,
      medecin:medecin.value,
      remarques: remarques.value,
    }).then(()=>{
      navigate("/observations");
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
          

          <label htmlFor="patient">ID Patient:</label>
          <input id="patient" name="patient" value={data.patient} onChange={handleChange}/>

          <label htmlFor="medecin">ID Medecin:</label>
          <input id="medecin" name="medecin" value={data.medecin}  onChange={handleChange}/>
          
          <label htmlFor="remarques">Remarques:</label>
          <textarea name="remarques" id="remarques" cols="30" rows="10" value={data.remarques} onChange={handleChange}></textarea>

           <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ObservationsUpdate;
