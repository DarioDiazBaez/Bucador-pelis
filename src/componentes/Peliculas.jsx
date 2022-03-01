import React, { useState, useEffect } from "react";
export default function Peliculas(props){
const fondo = {
  background: "#e38215",
  background: "linear-gradient(90deg, #e38215 0%, #dbc444 100%)",
}
const [pagina, setPagina] = useState(1);
if (pagina<=0){setPagina(props.Npagina)}
if (pagina>props.Npagina){setPagina(1)}
const handleSubmit = (e) => {
  e.preventDefault();
  props.Pagina(pagina)};

   return(
    <div className="container-fluid " style={fondo}>
      <div className="row d-flex justify-content-center">
      {!props.Resultados?<b className="text-center" style={{height: "100vh"}}>Sin resultados</b>:props.Resultados.map(e=>(
        <div className="card bg-secondary mx-3 my-3" style={{width: "13rem"}} key={e.imdbID}>
          <img src={e.Poster} className="my-2" title={e.Title}/>
          <div>
            <p>
            <b>Title: </b>{e.Title}<br/>
            <b>Year: </b>{e.Year}<br/>
            <b>Type: </b>{e.Type}
            </p>
          </div>
        </div>
      ))}
      </div>
      <div className="row">
        <div className="btn-toolbar">
          <form className="btn-group my-3 mx-auto" onSubmit={handleSubmit}>
            <button type="submit" className="btn btn-primary btn-sm" onClick={e=> setPagina(1)}>inicio</button>
            <button type="submit" className="btn btn-primary btn-sm" onClick={e=> setPagina(pagina-1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
            </button>
            <button type="submit" className="btn btn-primary btn-sm" onClick={e=> setPagina(pagina+1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
            </button>
            <button type="submit" className="btn btn-primary btn-sm"
            onClick={e=> setPagina(props.Npagina)}>final</button>
          </form>
        </div>      
      </div>
    </div>
  )}