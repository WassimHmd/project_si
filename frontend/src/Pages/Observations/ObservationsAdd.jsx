import axios from "axios";
import Navbar from "../../shared/Navbar/Navbar";

import "./Observations.css";
import { useNavigate } from "react-router";

function ObservationsAdd() {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      patient,
      medecin,
      remarques
    } = e.target;
    axios.post("http://127.0.0.1:8000/api/Observations/",{
      
      patient:patient.value,
      medecin:medecin.value,
      remarques: remarques.value
    }).then(()=>{
      navigate("/observations");
    })
  };
  return (
    <div>
      <Navbar />
      <div className="medecins-add-container">
        <form className="medecins-add-form" onSubmit={handleSubmit}>
          
          

          <label htmlFor="patient">ID Patient:</label>
          <input id="patient" name="patient" />

          <label htmlFor="medecin">ID Medecin:</label>
          <input id="medecin" name="medecin" />
          
          <label htmlFor="remarques">Remarques:</label>
          <textarea name="remarques" id="remarques" cols="30" rows="10"></textarea>

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ObservationsAdd;
