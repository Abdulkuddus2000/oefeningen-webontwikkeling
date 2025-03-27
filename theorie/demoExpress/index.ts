import express from "express";
const app = express();

app.set("view engine", "ejs");
app.set("port", 3000);

app.get("/", (req, res) => {
    let randomGetal: number = Math.random()*100;
    res.render("index", {aRandomNumber: randomGetal});
});

app.listen(app.get("port"), () => console.log("[server] http://localhost:" +app.get("port")));