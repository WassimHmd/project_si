import { RouterProvider } from "react-router-dom";
import router from './router/index.jsx';

import './App.css'

function App() {
  console.log("rendered");
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
