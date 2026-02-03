import express, { Express } from "express";
import dotenv from "dotenv";
import path from "path";
import { connect, getSpells, getSpellById } from "./database";
import { Spell } from "./types";

dotenv.config();

const app : Express = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(dirname, "public")));
app.set("views", path.join(dirname, "views"));

app.set("port", process.env.PORT ?? 3000);

const FIELDS : string[] = ["id", "name", "type", "mana", "description"];
app.use((req, res, next) => {
    res.locals.fields = FIELDS; // make fields available in all views
    next(); // call the next middleware
})

app.get("/", async(req, res) => {
    const q : string = typeof req.query.q === "string" ? req.query.q : "";
    const sortField : string = typeof req.query.sortField === "string" ? req.query.sortField : "id";
    const sortDirection : number = typeof req.query.sortDirection === "string" ? parseInt(req.query.sortDirection) : -1; // default value is -1

    const spells : Spell[] = await getSpells(q, sortField, sortDirection === -1 ? -1 : 1); // get all spells

    res.render("index", {
        spells: spells,
        q: q,
        sortDirection: sortDirection,
        sortField: sortField,
    })
});

app.get("/spells/:id", async(req, res) => {
    const id : number = parseInt(req.params.id);
    const spell : Spell | null = await getSpellById(id); // get spell by id

    if (!spell) {
        res.status(404).send("Spell not found");
    } 

    res.render("spell", {
        spell: spell
    });
});

app.listen(app.get("port"), async () => {
    await connect();
    console.log("Server started on http://localhost/:" + app.get("port"));
});