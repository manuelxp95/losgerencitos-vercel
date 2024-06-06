import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Desfios from "./components/Desafios/Desafios";
import Desafio_d4 from "./components/Desafios/Desafio_d4";
import Desafio_d5 from "./components/Desafios/Desafio_d5";
import Desafio_d6 from "./components/Desafios/Desafio_d6";
import Desafio_d7 from "./components/Desafios/Desafio_d7";
import Desafio_d9 from "./components/Desafios/Desafio_d9";
import Desafio_d10 from "./components/Desafios/Desafio_d10";
import Desafio_d11 from "./components/Desafios/Desafio_d11";
import Desafio_d12 from "./components/Desafios/Desafio_d12";
import Desafio_d13 from "./components/Desafios/Desafio_d13";
import Visita_exp from "./components/Desafios/Visita_exp";

import Miembros from "./components/Miembros/Miembros";
import MiembrosDet from "./components/Miembros/MiembroDetalle";
import MiembrosDet2 from "./components/Miembros/Miembro_d2";
import MiembrosDet3 from "./components/Miembros/Miembro_d3";

import MMentales from "./components/MapasMentales/MMentales";
import MMentales_u1 from "./components/MapasMentales/MMentales_u1";

import RutAprendizaje from "./components/RutaAprendizaje/RutaMiembros";
import Ruta_d1 from "./components/RutaAprendizaje/Ruta_d1";
import Ruta_d2 from "./components/RutaAprendizaje/Ruta_d2";
import Ruta_d3 from "./components/RutaAprendizaje/Ruta_d3";

import Alianza from "./components/Alianza/Alianza";

import Apuntes from "./components/Apuntes/Apuntes";

import Tpi from "./components/TPI/TPI";

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

          <Route path="/desafios" element={<Desfios/>}/>
          <Route path="/desafios/desafiodetalle4" element={<Desafio_d4 />}/>
          <Route path="/desafios/desafiodetalle5" element={<Desafio_d5 />}/>
          <Route path="/desafios/desafiodetalle6" element={<Desafio_d6 />}/>
          <Route path="/desafios/desafiodetalle7" element={<Desafio_d7 />}/>
          <Route path="/desafios/desafiodetalle9" element={<Desafio_d9 />}/>
          <Route path="/desafios/desafiodetalle10" element={<Desafio_d10 />}/>
          <Route path="/desafios/desafiodetalle11" element={<Desafio_d11 />}/>
          <Route path="/desafios/desafiodetalle12" element={<Desafio_d12 />}/>
          <Route path="/desafios/desafiodetalle13" element={<Desafio_d13 />}/>
          <Route path="/desafios/visitaexp" element={<Visita_exp />}/>


                  <Route path="/mapmentales" element={<MMentales />} />
                  <Route path="/mapmentales/mmentales1" element={<MMentales_u1 />} />

                  <Route path="/rutaprendi" element={<RutAprendizaje />} />
                  <Route path="/rutaprendi/ruta_d1" element={<Ruta_d1 />} />
                  <Route path="/rutaprendi/ruta_d2" element={<Ruta_d2 />} />
                  <Route path="/rutaprendi/ruta_d3" element={<Ruta_d3 />} />

                  <Route path="/alianzas" element={<Alianza />} />

                  <Route path="/apuntes" element={<Apuntes />} />

                  <Route path="/tpi" element={<Tpi />} />



        </Routes>
      </BrowserRouter>            
    </div>
  );
}

export default App;