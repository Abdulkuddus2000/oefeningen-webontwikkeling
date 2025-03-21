import express from "express";

const app = express();

app.set("post", 3000);


// routes, dit zijn pagina's op een website:
app.get("/", (req, res) => {
    res.type("text/html");
    res.send("Hello <string>World</string>");
});

// nog meer routes:
app.get("/", (req, res) => {
    res.type("text/html");
    res.send("Yet another hello world app...");
});

app.get("/helloworld", (req, res) => {
    res.type("text/html");
    res.send("Hello world");
});

app.get("/goodbye", (req, res) => {
    res.type("txt/html");
    res.send("Later <strong>World</strong>");
});


// klasse Person
interface Person{
    name: string,
    age: number
}

// 3 Person-objecten
const data: Person[] = [
    {name: "george", age: 50},
    {name: "jane", age: 32},
    {name: "john", age: 42},
];

// andere type gebruiken om de data sturen (een json-file)
app.get("/getData", (req, res)=>{
    res.type("application/json");
    res.json(data);
});

app.get("/users");

app.listen(app.get("post"), () => console.log("[server] http://localhost:"+app.get("port")));

// wanneer een pad niet gevonden word:
app.use((req, res) =>{
    res.type("text/html");
    res.status(404);
    res.send("404 - Not found")
});

// Asynch types, gebruik await!!!
app.get("/user", async (requestAnimationFrame, res) =>{
    res.type("application/json");
    res.json(data);
});


//app.listen moet helemaak onderaan komen !!!
app.listen(app.get("port"), async () =>{
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log("[server] http://localhost:" +app.get("port"))
});


/*
<%- include("partials/header") %> --> als html/tekst laten posten, gebruik dit om partials te importeren
<%= 1+2%> --> berekende waarde tonen
*/
