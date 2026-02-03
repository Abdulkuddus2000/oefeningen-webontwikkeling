import express, { Express } from "express";
import dotenv from "dotenv";
import path from "path";
import { nextTick, title } from "process";
import { User } from "./types";
import { authMiddleware } from "./middleware/authMiddleware";
import { requestLimiter } from "./middleware/requestLimiterMiddleware";

dotenv.config();

const app : Express = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));

app.set("port", process.env.PORT ?? 3000);

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} ${req.ip}`);
    next(); // voor de afhandeling van de request
});

app.get("/", (req, res) => {
    res.render("index", {
        title: "Hello World",
        message: "Hello World"
    })
});

app.get("/contact", (req, res) =>{

});

// als geen enkele pad werkt, ga je automatisch naar de "/":
app.use((req, res, next) =>{
    res.redirect("/")
});

function formatDate(date: Date){
    return date.toISOString().split("T")[0];
}

app.use((req, res, next) =>{
    res.locals.title = "Default title";
    res.locals.formatDate = formatDate;
    res.locals.random = (from: number, to: number) =>{
        return Math.floor(Math.random() * (to - from + from) + from);
    }
    next(); // belangrijk om next aan te roepen
});


const users : User[] = [
    { username: "LeonZusk", password: "DOGE" },
    { username: "Andie", password: "DitIsMijnPassword" }
];


app.get("/api/users", (req, res)=>{
    res.json(users);
});

app.get("/", (req, res) =>{
    res.render("index", {
        title: "Hello World",
        message: "Hello World"
    })
});

app.get("/contact", (req, res) =>{
    res.render("contact");
});

app.get("/posts/:username", (req, res) =>{
    const username = req.params.username;
    const user: User | undefined = users.find((user) => user.username === username);
    
    if(!username){
        // return res.status(404).json({ message: "User not found" });
        throw new Error("User not found");
    }
    res.render("posts", {
        username: user.username;
    });
})

app.get("/todos", (req, res) =>{
    await fetch("http://onbestaandepagina.org/yolo");
    let json = await response.json();
});


app.use(requestLimiter);

app.listen(app.get("port"), () => {
    console.log("Server started on http://localhost:" + app.get("port"));
});