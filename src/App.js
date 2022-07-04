//Importaciones necesarias
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import React from "react";
//Rutas de las paginas que estaran enlazadas
import { Navbar } from "./navbar";
import { Bienvenido } from "./paginas/Bienvenido";
import { Estudiante } from "./paginas/Estudiante";
import { Pokemons } from "./paginas/Pokemons";
import { Pokemon } from "./paginas/Pokemon";
//exportaciones, rutas con caracteristicas definidas
export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Bienvenido />} />
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />
          <Route path="/191508" element={<Estudiante />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}