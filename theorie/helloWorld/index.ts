import express from "express";

const app = express();

app.set("port", 3000);

// routes, dit zijn pagina's op een website:
app.get("/", (req, res) => {
    res.type("text/html");
    res.send("Hello <strong>World</strong>");
});

// app.get("/", (req, res) => {
//     res.type("text/html");
//     res.send("Yet another hello world app...");
// });

app.get("/helloworld", (req, res) => {
    res.type("text/html");
    res.send("Hello world");
});

app.get("/goodbye", (req, res) => {
    res.type("text/html");
    res.send("Later <strong>World</strong>");
});



// async types, gerbuik await!

app.get("/user", async (req, res) =>{
    
})
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

// Asynch types, gebruik await!!!
app.get("/user", async (req, res) =>{
    res.type("application/json");
    res.json(data);
});


// wanneer een pad niet gevonden word:
app.use((req, res) =>{
    res.type("text/html");
    res.status(404);
    res.send("404 - Not found")
});

//app.listen moet helemaak onderaan komen !!!
app.listen(app.get("port"), async () =>{
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log("[server] http://localhost:" +app.get("port"));
});


// /*
// <%- include("partials/header") %> --> als html/tekst laten posten, gebruik dit om partials te importeren
// <%= 1+2%> --> berekende waarde tonen
// */



////////////////////////////////////////////////////////////////////
// import express from "express";

// const app = express();

// app.set("port", 3000);

// // Routes
// app.get("/", (req, res) => {
//     res.type("text/html");
//     res.send("Hello <strong>World</strong>");
// });

// app.get("/helloworld", (req, res) => {
//     res.type("text/html");
//     res.send("Hello world");
// });

// app.get("/goodbye", (req, res) => {
//     res.type("text/html");
//     res.send("Later <strong>World</strong>");
// });

// // Interface Person
// interface Person {
//     name: string;
//     age: number;
// }

// // 3 Person-objecten
// const data: Person[] = [
//     { name: "george", age: 50 },
//     { name: "jane", age: 32 },
//     { name: "john", age: 42 },
// ];

// // JSON-data versturen
// app.get("/getData", (req, res) => {
//     res.type("application/json");
//     res.json(data);
// });

// // Asynchrone route voor externe API
// app.get("/users", async (req, res) => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const users = await response.json();
//         res.json(users);
//     } catch (error) {
//         res.status(500).json({ error: "Kan gebruikers niet ophalen" });
//     }
// });

// // 404-pagina als route niet bestaat
// app.use((req, res) => {
//     res.type("text/html");
//     res.status(404).send("404 - Not Found");
// });

// // Server starten
// app.listen(app.get("port"), () => {
//     console.log("[server] Running at http://localhost:" + app.get("port"));
// });
