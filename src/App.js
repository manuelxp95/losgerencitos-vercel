import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Miembros from "./components/Miembros/Miembros";
import "./styles/globals.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/miembros" element={<Miembros />}/>
        </Routes>
      </BrowserRouter>            
    </div>
  );
}

export default App;