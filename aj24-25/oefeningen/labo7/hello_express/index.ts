import express, { Express } from "express";
import dotenv from "dotenv";
import path from "path";
import { Pokemon, PokemonSprites } from "./public/types";

dotenv.config();

const app : Express = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));

app.set("port", process.env.PORT ?? 3000);

const thisisme = {
    name: "Abdulkuddus",
    age: 25,
    profilePicture: "assets/images/Profielfoto.jpg"
};

app.get("/", (req, res) => {
    res.type("text/html");
    res.send(`
        <html>
            <head>
                <title>Titel van mijn applicatie</title>
            </head>

            <body>
                <p>Some text to send</p>
            </body>
        </html>
    `);
});

app.get("/whoami", (req, res) => {
    res.type("text/html");
    res.send(`
        <html>
            <body>
                <p>
                    My name is ${thisisme.name} and I am ${thisisme.age} years old.
                    <img src="${thisisme.profilePicture}" style="height: 100px;">
                </p>
            </body>
        </html>    
    `);
});



app.get("/whoamijson", (req, res) => {
    res.json(thisisme);
});


const pikachu = fetch("https://pokeapi.co");


app.get("/pikachu_json", async(req, res) => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    const data = await response.json();

    const pikachu: Pokemon = data;
    res.json(pikachu);
});

app.get("/pikachu_html", async (req, res) => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    const data = await response.json();

    const pikachu: Pokemon = data;
    const html = `
        <html>
            <body>
                <h1>Naam: ${pikachu.name}</h1>

                <p>Id: ${pikachu.id}</p>
                <p>Gewicht: ${pikachu.weight}</p>
                <img src="${pikachu.sprites.front_default}">
                <img src="${pikachu.sprites.back_default}">
            </body>
        </html>
    `;

    res.send(html);
});


app.get("/randomcolor", (req, res) => {
    const letters = ["A", "B", "C", "D", "E", "F"];
    const randomColor: string[] = [];

    for (let i = 0; i < 6; i++) {
        const randomNumber = Math.floor(Math.random() * 16);
        
        if (randomNumber > 9) {
            randomColor[i] = letters[randomNumber - 10];
        } else {
            randomColor[i] = randomNumber.toString();
        }
    }
    
    let usableColor: string = "#" + randomColor.join("");

    res.type("text/html");
    const html = `
        <html>
            <head>
                <style>
                    body{
                        background-color: ${usableColor};
                    }

                    h1 {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        font-family: sans-serif;
                        font-size: 3rem;
                    }
                </style>
            </head>

            <body>
                <h1>${usableColor}</h1>
            </body>
        </html>    
    `;

    res.send(html);
});

app.listen(app.get("port"), () => {
    console.log("Server started on http://localhost:" + app.get("port"));
});