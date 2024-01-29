import Navbar from "../../shared/Navbar/Navbar"
import RDV from "../../assets/RDV.png"
import Medecin from "../../assets/doctor.png"
import Patient from "../../assets/patient.png"
import clipboard from "../../assets/clipboard.png"

import './Home.css'
import { useNavigate } from "react-router"

function Home() {
  const navigate = useNavigate()
  return (
    <div>
      <Navbar/>
      <div className="home-container">
        <div className="home-card" onClick={()=>navigate('/medecins')}>
          <img src={Medecin}/>
          <h1>Medecins</h1>
        </div>
        <div className="home-card" onClick={()=>navigate('/patients')}>
          <img src={Patient}/>
          <h1>Patients</h1>
        </div>
        <div className="home-card" onClick={()=>navigate('/rendezvous')}>
          <img src={RDV}/>
          <h1>Rendez-Vous</h1>
        </div>
        <div className="home-card">
          <img src={clipboard}/>
          <h1>Observations</h1>
        </div>
      </div>
    </div>
  )
}

export default Home
