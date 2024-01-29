import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../../shared/Navbar/Navbar";
import ListItem from "../../shared/ListItem/ListItem";

import "./Observations.css";
import { useNavigate } from "react-router";
import ObservationsUpdate from "./ObservationsUpdate.jsx";

function Observations() {
  const [observations, setObservations] = useState([]);
  const [trigger, setTrigger] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/Observations/")
      .then((res) => {
        setObservations(res.data);
      })
      .catch((err) => console.error(err));
  }, [trigger]);
  return (
    <div>
      <Navbar />
      
      <div className="medecins-container">
        <h1>Observations</h1>
        <div>
          <button className="add-button" onClick={()=>navigate("./add")}>
            ADD
          </button>
        </div>
        {observations.map((obs) => (
          <ListItem
            key={obs.observation_ID}
            fields={[
              { title: "ID Patient", value: obs.patient },
              { title: "ID Medecin", value: obs.medecin },
              { title: "Date", value: obs.dateCreation },
            ]}
            onDelete={() => {
              axios
                .delete(
                  `http://127.0.0.1:8000/api/Observations/${obs.observation_ID}`
                )
                .then(() => {
                  setObservations((state) =>
                    state.filter(
                      (elem) => elem.observation_ID != obs.observation_ID
                    )
                  );
                })
                .catch((err) => console.error(err));
            }}
            onEdit={<ObservationsUpdate data_raw={obs} onSuccess={()=>{setTrigger(state=>!state)}}/>}
          />
        ))}
      </div>
    </div>
  );
}

export default Observations;
