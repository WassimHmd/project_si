import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../../shared/Navbar/Navbar";
import ListItem from "../../shared/ListItem/ListItem";

import "./RendezVous.css";
import { useNavigate } from "react-router";
import RendezVousUpdate from "./RendezVousUpdate";

function RendezVous() {
  const [rendezVous, setRendezVous] = useState([]);
  const [trigger, setTrigger] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/RendezVous/")
      .then((res) => {
        setRendezVous(res.data);
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
        {rendezVous.map((RDV) => (
          <ListItem
            key={RDV.RDV_ID}
            fields={[
              { title: "ID Patient", value: RDV.patient },
              { title: "ID Medecin", value: RDV.medecin },
              { title: "Date", value: RDV.date },
              { title: "Heure", value: RDV.heure },
            ]}
            onDelete={() => {
              axios
                .delete(
                  `http://127.0.0.1:8000/api/RendezVous/${RDV.RDV_ID}`
                )
                .then(() => {
                  setRendezVous((state) =>
                    state.filter(
                      (elem) => elem.RDV_ID != RDV.RDV_ID
                    )
                  );
                })
                .catch((err) => console.error(err));
            }}
            onEdit={<RendezVousUpdate data_raw={RDV} onSuccess={()=>{setTrigger(state=>!state)}}/>}
          />
        ))}
      </div>
    </div>
  );
}

export default RendezVous;
