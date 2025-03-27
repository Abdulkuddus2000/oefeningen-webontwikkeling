import express from "express";
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");
app.set("port", 3000);

interface Person{
    name: string;
    city: string;
    age: number;
}

app.get("/", (req, res) => {
    let persons: Person[] = [
        {name: "Sven", city: "Antwerpen", age: 40},
        {name: "Andie", city: "Gent", age: 30},
        {name: "Sam", city: "Brussel", age: 25},
        {name: "Barbara", city: "Leuven", age: 35}
    ];
    res.render("index", {persons: persons});
});

app.listen(app.get("port"), () => console.log("[server] http://localhost:" +app.get("port")));