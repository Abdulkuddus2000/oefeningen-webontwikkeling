import express, { Express } from "express";
import dotenv from "dotenv";
import path from "path";
import { Person } from "./types";

dotenv.config();

const app : Express = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));

app.set("port", process.env.PORT ?? 3000);

const persons: Person[] = [
    {name: "Andie", age: 40},
    {name: "Cedric", age: 20},
    {name: "Abdul", age: 24},
    {name: "Yara", age: 22},
    {name: "Yaowi", age: 22}
]

app.get("/search", (req, res) =>{
    // req --> om data uit te lezen
    // res -->  data invoeren

    // type van de invoer checken en in een string-formaat steken als het een string
    let q: string = typeof req.query.q === "string" ? req.query.q: "";

    // namen die beginnen met de waade van q komen in de array
    let filteredPersons: Person[] = persons.filter((person) => person.name.toUpperCase().startsWith(q.toUpperCase())); // beide moeten met hoofdletter, dan kan je op alle mogelijke manieren iets opzoeken
    res.type("html");
    res.render("search", {
        persons: filteredPersons,
        q: q // geef de queryparameter ook mee door om het nog zichtbaar te laten na het drukken op de submit-knop
    });
});

app.get("/", (req, res) => {
    let headers = req.headers;
    let ip = req.ip

    console.log(headers["user-agent"]);
    console.log(ip);

    res.render("index", {
        title: "Hello World",
        message: "Hello World"
    })
});

app.listen(app.get("port"), () => {
    console.log("Server started on http://localhost:" + app.get("port"));
});