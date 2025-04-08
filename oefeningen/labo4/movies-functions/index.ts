import { title } from "process";
import movieData from "./movies.json"
import { markAsUntransferable } from "worker_threads";

interface Movie {
    title: string,
    year: number,
    actors: string[],
    metascore: number,
    seen: boolean
}

// wijs de ingelezen data toe aan een variabaele met het Movie type

// eerste variabele
const movie: Movie = movieData;

console.log("Movie Title:", movie.title);
console.log("Year:", movie.year);
console.log("Actors:", movie.actors.join(", "));
console.log("Metascore:", movie.metascore);
console.log("Seen:", movie.seen ? "Yes" : "No");

// 2e variabele:

const myFavoriteMovie: Movie = {
    title: "The Last Samuray",
    year: 2000,
    actors: ["Tom Cruise", "Ken Watanabe", "Hiroyuki Sanada"],
    metascore: 100,
    seen: true
};

console.log();
console.log("My favorite movie:");
console.log();

console.log("Movie Title:", myFavoriteMovie.title);
console.log("Year:", myFavoriteMovie.year);
console.log("Actors:", myFavoriteMovie.actors.join(", "));
console.log("Metascore:", myFavoriteMovie.metascore);
console.log("Seen:", myFavoriteMovie.seen ? "Yes" : "No");

const myWorstMovie: Movie = {
    title: "The mask",
    year: 2002,
    actors: ["Jim Carry", "Cameron Diaz", "Peter Greene"],
    metascore: 50,
    seen: true
}

console.log();
console.log("My worst movie:");
console.log();

console.log("Movie Title:", myWorstMovie.title);
console.log("Year:", myWorstMovie.year);
console.log("Actors:", myWorstMovie.actors.join(", "));
console.log("Metascore:", myWorstMovie.metascore);
console.log("Seen:", myWorstMovie.seen ? "Yes" : "No");

let wasMovieMadeInThe90s = (movie: Movie): boolean => {
    return (1990 <= movie.year && movie.year < 2000);
}

// rest parameter gebruiken
let averageMetaScore = (...numbers: number[]): number => {
    let total: number = 0;

    for (const el of numbers) {
        total += el;
    }

    let average: number = total / numbers.length;

    return Number(Number(average).toFixed(2));
}

console.log();
console.log("Films van de jaren 90:");
console.log("Is mijn favoriete film van de jaren 90? " +myFavoriteMovie.title +": " +(wasMovieMadeInThe90s(myFavoriteMovie)? "Ja": "Nee"));
console.log("Is mijn The MAtrix een film van de jaren 90? " +movie.title +": " +(wasMovieMadeInThe90s(movie)? "Ja": "Nee"));

console.log();
console.log("Gemiddelde metascore: " + averageMetaScore(
    movie.metascore,
    myFavoriteMovie.metascore,
    myWorstMovie.metascore
));


export {}