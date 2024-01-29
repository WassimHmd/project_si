import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../../shared/Navbar/Navbar";
import ListItem from "../../shared/ListItem/ListItem";

import "./Medecins.css";
import { useNavigate } from "react-router";
import MedecinsUpdate from "./MedecinsUpdate";

function Medecins() {
  const [medecins, setMedecins] = useState([]);
  const [trigger, setTrigger] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/Medecins/")
      .then((res) => {
        setMedecins(res.data);
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
        {medecins.map((medecin) => (
          <ListItem
            key={medecin.medecin_ID}
            fields={[
              { title: "ID Medecin", value: medecin.medecin_ID },
              { title: "Nom", value: medecin.nom },
              { title: "Pernom", value: medecin.prenom },
            ]}
            onDelete={() => {
              axios
                .delete(
                  `http://127.0.0.1:8000/api/Medecins/${medecin.medecin_ID}`
                )
                .then(() => {
                  setMedecins((state) =>
                    state.filter(
                      (elem) => elem.medecin_ID != medecin.medecin_ID
                    )
                  );
                })
                .catch((err) => console.error(err));
            }}
            onEdit={<MedecinsUpdate data_raw={medecin} onSuccess={()=>{setTrigger(state=>!state)}}/>}
          />
        ))}
      </div>
    </div>
  );
}

export default Medecins;
