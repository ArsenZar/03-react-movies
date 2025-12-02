import SearchBar from "./components/SearchBar/SearchBar";
import css from "./App.module.css";
import movieService from "./services/movieService";
import { useState, useEffect } from "react";
import type { Movie } from "./types/movie";


export default function App() {

  const [movies, setMovies] = useState<Movie[]>([]);
  
  async function res(par: string) {
    const resoult = await movieService(par);
    setMovies(resoult);
  }

  useEffect(() => {
    console.log("movies updated:", movies);
  }, [movies]);


  return (
    <div className={ css.app }>
      <SearchBar onSubmit={res}/>
    </div>
  );
}

