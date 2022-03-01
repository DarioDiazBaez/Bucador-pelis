// API http://www.omdbapi.com/?i=tt3896198&apikey=3fac397f&s=robot&page=2
import React, { useState, useEffect } from "react";
import Buscadorpeli from "./componentes/Buscadorpeli";
import Peliculas from "./componentes/Peliculas";
import Footer from "./componentes/Footer";
import Sidebar from "./componentes/Sidebar";

export default function App() {

const [pelicula, setPelicula] = useState("super");
const [pagina, setPagina] = useState("1");
const [npagina, setNpagina] = useState();
const [resultados, setResultados] = useState([]);

 useEffect(() => {
    let url = `http://www.omdbapi.com/?i=tt3896198&apikey=3fac397f&s=${pelicula}&page=${pagina}`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.Search)
        json.Search ? setResultados(json.Search) : setResultados(false)
        let n = json.totalResults
        parseInt(n, 10);
        n = n/10
        n = Math.ceil(n)
        setNpagina(n)
      });
  }, [pelicula,pagina]); 

  return (
    <div className="App">
      <Sidebar />
      <Buscadorpeli
      pelicula={(e)=>{setPelicula(e)}} />
      <Peliculas
      Npagina={npagina}
      Resultados={resultados}
      Pagina={(e)=>{setPagina(e)}}/>
      <Footer />
    </div>
  );
}