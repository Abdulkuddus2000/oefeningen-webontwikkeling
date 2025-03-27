import express from "express";

const app = express();

app.set("port", 3000);

app.get("/", (req, res) => {
    let randomGetal = Math.random()*100;
    res.type("text/html");
    res.send(`Het random getal is ${randomGetal}`);
});

app.listen(app.get("port"), () => 
    console.log("[server] http://localhost:" +app.get("port"))
);