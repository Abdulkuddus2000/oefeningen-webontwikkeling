import { Collection, MongoClient } from "mongodb";
import { Pokemon } from "./types";
import readline from "readline-sync";

const CONNECTION_STRING: string = "mongodb+srv://mongodb:mongodb@cluster0.95kqhhe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function main() {
    const client: MongoClient = new MongoClient(CONNECTION_STRING);

    try {
        await client.connect();
        console.log("Connected with database");
        const collection: Collection<Pokemon> = client.db("Pokemon").collection("Pokemon");
        const dbPokemons: Pokemon[] = await collection.find<Pokemon>({}).toArray();

        if (dbPokemons.length === 0) {
            const response = await fetch("https://sampleapis.assimilate.be/pokemon/pokemon");
            const pokemon: Pokemon[] = await response.json();

            await collection.insertMany(pokemon);

            console.log(`${pokemon.length} pokemon added to the database`)
            await collection.insertMany(pokemon);
        }

        let running: boolean = true;
        do {
            const answer: string = readline.question("Enter a pokemon id: ");
            let id: number = parseInt(answer);


            if (isNaN(id)) {
                running = false;
            } else {
                // hier gaan we de pokemon opvragen
                let foundPokemon: Pokemon | null = await collection.findOne<Pokemon>({ id: id });
                
                if (foundPokemon) {
                    console.log(foundPokemon);
                } else {
                    console.log("Pokemon not found");
                }
            }
        } while (running);

    } catch (e) {
        console.log("Database connection failed");
    } finally {
        await client.close();
    }
}
main();

export {}