import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Medecins from "../Pages/Medecins/Medecins";
import MedecinsAdd from "../Pages/Medecins/MedecinsAdd";

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
    ],
  },
]);


export default router;
