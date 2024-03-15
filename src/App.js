import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Miembros from "./components/Miembros/Miembros";
import MiembrosDet from "./components/Miembros/MiembroDetalle";
import MiembrosDet2 from "./components/Miembros/Miembro_d2";
import MiembrosDet3 from "./components/Miembros/Miembro_d3";
import "./styles/globals.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/miembros" element={<Miembros />}/>
          <Route path="/miembros/miembrodetalle" element={<MiembrosDet />}/>
          <Route path="/miembros/miembrodetalle2" element={<MiembrosDet2 />}/>
          <Route path="/miembros/miembrodetalle3" element={<MiembrosDet3 />}/>
        </Routes>
      </BrowserRouter>            
    </div>
  );
}

export default App;