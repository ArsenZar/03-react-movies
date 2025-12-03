import axios from "axios";
import type { Movie } from "../types/movie";

interface MovieSearchResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

export default async function fetchMovies(userQuery: string): Promise<Movie[]> {
    
    const myKey = import.meta.env.VITE_TMDB_TOKEN;

    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie',
        params: {
            query: userQuery,
            include_adult: false,
            language: "en-US",
            page: 1

        },
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${myKey}`
        }
    };
    

    const responce = await axios.request<MovieSearchResponse>(options);
    return responce.data.results;

}

// res => console.log(res.data)