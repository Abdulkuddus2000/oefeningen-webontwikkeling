// Voorbeeld met meerdere async stappen

import { error } from "console";

// gebruiker ophalen --> bericht ophalen --> weergeven
const getUser = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: "Alice" });
        }, 1000);
    });
};

const getMessageForUser = (userID) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 101, name: "Hallo!" },
                { id: 102, name: "Hoe gaat het?" }
            ]);
        }, 1000);
    });
};

const displayUserMessage = async () => {
    try {
        console.log("Gebruiker ophalen...");
        const user = await getUser();
        console.log(`Gebruiker gevonden: ${user.name}`);

        console.log("Berichten ophalen...");
        const messages = await getMessageForUser(user.id)
        console.log(`Berichten voor ${user.name}:`);
        messages.forEach(element => {
            // console.log("Er ging iets mis: ", error);
            console.log(`- ${element.name}`);
        });
    } catch (error) {
    console.error("Er ging iets mis: ", error);
    }
}