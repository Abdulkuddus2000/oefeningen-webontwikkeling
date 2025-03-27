import express from "express";
const app = express();

app.set("view engine", "ejs");
app.set("port", 3000);

app.get("/", (req, res) => {
    let randomGetal: number = Math.random()*100;
    let randomGetal2: number = randomGetal * 2;
    res.render("index", 
        {
            aRandomNumber: randomGetal,
            name: "Sven",
            age: 40,
            someOtherNumber: randomGetal2
        });
});

app.listen(app.get("port"), () => console.log("[server] http://localhost:" +app.get("port")));