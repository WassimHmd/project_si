import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../../shared/Navbar/Navbar";
import ListItem from "../../shared/ListItem/ListItem";

import "./Patients.css";
import { useNavigate } from "react-router";
import PatientsUpdate from "./PatientsUpdate";

function Patients() {
  const [patients, setPatients] = useState([]);
  const [trigger, setTrigger] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/patients/")
      .then((res) => {
        setPatients(res.data);
      })
      .catch((err) => console.error(err));
  }, [trigger]);
  return (
    <div>
      <Navbar />
      
      <div className="medecins-container">
        <div>
          <button className="add-button" onClick={()=>navigate("./add")}>
            ADD
          </button>
        </div>
        {patients.map((patient) => (
          <ListItem
            key={patient.patient_ID}
            fields={[
              { title: "ID Patient", value: patient.patient_ID },
              { title: "Nom", value: patient.nom },
              { title: "Prenom", value: patient.prenom },
            ]}
            onDelete={() => {
              axios
                .delete(
                  `http://127.0.0.1:8000/api/patients/${patient.patient_ID}`
                )
                .then(() => {
                  setPatients((state) =>
                    state.filter(
                      (elem) => elem.patient_ID != patient.patient_ID
                    )
                  );
                })
                .catch((err) => console.error(err));
            }}
            onEdit={<PatientsUpdate data_raw={patient} onSuccess={()=>{setTrigger(state=>!state)}}/>}
          />
        ))}
      </div>
    </div>
  );
}

export default Patients;
