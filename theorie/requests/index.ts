import express, { Express } from "express";
import dotenv from "dotenv";
import path from "path";
import { agent } from "supertest";

dotenv.config();

const app : Express = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));

app.set("port", process.env.PORT ?? 3000);

// let people = ["Sven","Andie","George","Geoff"];



let people = ["Sven", "Andie", "george", "Geoff"]
app.get("/person", (req, res) =>{
    res.type("text/html");
    // if stmt: veronderstellen dat de input een string is
    if(typeof req.query.index === "string"){
        let index = parseInt(req.query.index);
        res.send(people[index]);
    }
    else{
        res.send("Ongeldige parameterwaarde");
    }
});

app.get("/headers", (req, res) => {
    let headers = req.headers;
    res.json(headers);
});

// specifieke header lezen:
app.get("/headers", (req, res) => {
    let userAgent = req.headers["user-agent"];
    res.type("text/html");
    res.send(`Your browser is ${userAgent}`);
});

// GET request
app.get("/", (req, res) =>{
    res.type("text/html");
    res.send("Hallo");
});

interface Person {
    name: string;
    age: number;
}

const persons: Person[] = [
    {name: "Sven", age: 25},
    {name: "Andie", age: 24},
    {name: "George", age: 30},
    {name: "Zeoff", age: 28},
]

app.get("/", (req, res) => {
    let q: string = typeof req.query.q === "string"? req.query.q : "";

    let filteredPersons : Person[] = persons.filter((person) =>{
        return person.name.toLowerCase().startsWith(q.toLowerCase());
    });

    // sorteren
    const sortField = typeof req.query.sortField === "string" ? "req.query.sortField": "name";
    const sortDirection = typeof req.query.sortDirection === "string" ? req.query.sortDirection : "asc";
    
    let sortedPersons = [...filteredPersons].sort((a, b) => {
        if(sortField === "name"){
            return sortDirection === "asc" ? a.name.localeCompare(b.name): b.name.localeCompare(a.name);
        }
        else if(sortField === "age"){
            return sortDirection === "asc" ? a.age - b.age : b.age - a.age;
        }else{
            return 0;
        }
    });

    res.render("index", {
        persons: filteredPersons,
        q: q,
        sortField: sortField,
        sortDirection: sortDirection
    });
});


app.listen(app.get("port"), () => {
    console.log("Server started on http://localhost:" + app.get("port"));
});