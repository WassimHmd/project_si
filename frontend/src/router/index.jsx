import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Medecins from "../Pages/Medecins/Medecins";
import MedecinsAdd from "../Pages/Medecins/MedecinsAdd";
import Patients from "../Pages/Patient/Patients";
import PatientsAdd from "../Pages/Patient/PatientsAdd";
import RendezVous from "../Pages/RendezVous/RendezVous";
import RendezVousAdd from "../Pages/RendezVous/RendezVousAdd";
import Observations from "../Pages/Observations/Observations";
import ObservationsAdd from "../Pages/Observations/ObservationsAdd";

const router = createBrowserRouter([
  {
    path: "",
    children: [
      {
        path: "",
        element: <Home />,
        id: "/",
      },
      {
        path: "/medecins",
        element: <Medecins />,
        id: "/medecins",
      },
      {
        path: "/medecins/add",
        element: <MedecinsAdd />,
        id: "/medecins/add"
      },
      {
        path: "/patients",
        element: <Patients />,
        id: "/patients"
      },
      {
        path: "/patients/add",
        element: <PatientsAdd />,
        id: "/patients/add"
      },
      {
        path: "/rendezvous",
        element: <RendezVous />,
        id: "/rendezvous"
      },
      {
        path: "/rendezvous/add",
        element: <RendezVousAdd />,
        id: "/rendezvous/add"
      },
      {
        path: "/observations",
        element: <Observations />,
        id: "/observations"
      },
      {
        path: "/observations/add",
        element: <ObservationsAdd />,
        id: "/observations/add"
      },
    ],
  },
]);


export default router;
