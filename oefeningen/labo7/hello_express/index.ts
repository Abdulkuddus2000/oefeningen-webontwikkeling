import express, { Express } from "express";
import dotenv from "dotenv";
import path from "path";

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


app.get("/pikachujson", async(req, res) => {
    const response = await fetch("https://pokeapi.co/api/vs/pokemon/pikachu");
    const pikachu: Pokemon
    res.json(pikachu);

});

app.get("/pikachuhtml", async (req, res) => {
    const response = await fetch("https://pokeapi.co/api/vs/pokemon/pikachu");

});

app.listen(app.get("port"), () => {
    console.log("Server started on http://localhost:" + app.get("port"));
});