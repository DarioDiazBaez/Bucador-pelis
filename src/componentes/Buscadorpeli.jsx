import React, { useState } from "react";
const fondo = {
  background: "#e38215",
  background: "linear-gradient(90deg, #e38215 0%, #dbc444 100%)",
}
export default function Buscadorpeli(props){
const [pelicula, setPelicula] = useState("");
const handleSubmit = (e) => {
  e.preventDefault();
  props.pelicula(pelicula)};

  return(
    <div className="px-3 py-3"style={fondo}>
      <form className="input-group" onSubmit={handleSubmit} >
        <input className="form-control" type="text" value={pelicula}
        // style={{marginLeft: "87px"}}
        placeholder="Busca peliculas, series ,etc"
        onChange={(e) => setPelicula(e.target.value)} autoComplete="off"
        aria-label="Recipient's username" aria-describedby="button-addon2"/>
        <input className="btn btn-secondary" type="submit" value="Buscar" id="button-addon2"/>
      </form>
    </div>)}