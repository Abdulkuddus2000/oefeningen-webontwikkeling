import moviesData from "./movie.json";

interface Movie {
  title: string;
  year: number;
  actors: string[];
  metascore: number;
  seen: boolean;
}

const movie: Movie = moviesData;
console.log(movie.actors);
