import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../src/Componentes/Home';
import Sobre from '../src/Componentes/Sobre';
import Regras from './Componentes/Regras'
import ComoJogar from './Componentes/ComoJogar';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <div className="navbar-brand">
            <span>UNO</span> Site
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/regras">Regras</Link></li>
            <li><Link to="/comojogar">Como Jogar</Link></li>
          </ul>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/regras" element={<Regras />} />
            <Route path="/comojogar" element={<ComoJogar />} />
          </Routes>
        </div>
        <footer className="footer">
          &copy; {new Date().getFullYear()} UNO Site. Todos os direitos reservados.
        </footer>
      </div>
    </Router>
  );
}

export default App;
