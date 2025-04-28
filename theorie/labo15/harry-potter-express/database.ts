import { Collection, MongoClient, SortDirection } from "mongodb";
import { Spell } from "./types";


const CONNECTION_STRING: string = "mongodb+srv://omerakdeniz1208:omer2004@labos.pdqyj9j.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(CONNECTION_STRING);

export const spellsCollection : Collection<Spell> = client.db("labos").collection("Spells");

export async function getSpells(q : string = "", sortField : string = "id", sortDirection: SortDirection = 1){ // default value is empty string, voor als je geen string wilt meegeven
    const query = q === "" ? {} : {$text: {$search: q}}; // if q is empty, return all spells
    return await spellsCollection.find(query).sort({[sortField] : sortDirection}).toArray(); // get all spells
}

export async function getSpellById(id: number){
    return await spellsCollection.findOne({ id: id }); // get spell by id
}

async function seed() {
    if (await spellsCollection.countDocuments() === 0) {  // check if the collection is empty
        const response = await fetch("https://sampleapis.assimilate.be/harrypotter/spells");
        const json : Spell[] = await response.json();

        const insertResponse  = await spellsCollection.insertMany(json);
        console.log("Added insert response");

        console.log(Added ${insertResponse.insertedCount} to the collection);
    }
}

export async function exit() {
    try {
        await client.close();
        console.log("Database connection closed.");
    } catch (error) {
        console.log("error")
    } finally{
        process.exit(0); // exit the process
    }

}

export async function connect() {
    try {
        await client.connect();
        console.log("Connected to the database");
        process.on("SIGINT", exit ); // listen for the SIGINT signal (Ctrl+C)

        await seed();

        await spellsCollection.dropIndex("*"); // drop all indexes
        await spellsCollection.createIndex({ name: "text" , type: "text", description: "text"  }); // create index on id field
    } catch (error) {
        console.error(error);
        process.exit(0); // exit the process with an error code
    }
}

