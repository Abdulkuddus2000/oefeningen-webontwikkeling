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
    interface Person{
        name: string;
        age: number;
        profilePic: string;
    }

    
});

app.get("/whoamijson", (req, res) => {
    
});

app.listen(app.get("port"), () => {
    console.log("Server started on http://localhost:" + app.get("port"));
});