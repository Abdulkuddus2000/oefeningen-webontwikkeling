// // oefening: fake-fetch

interface Callback {
    (n: number): void
}



// Promise methode
const getRandom = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve levert iets op, nl: een getal tussen 0 en 99
            resolve(Math.floor(Math.random() * 100))
        }, 1000);
    })
}

// wanneer de Promise is voltooid (= resolved), voer deze functie uit met de uitkomst (= result)
getRandom().then((result) => {
    console.log(`The number was ${result}`);
});


// dit is de Immediately Invoked Async Function Expression (IIFE) methode die hetzelfde doet:
(async () => {
    // wacht tot de Promise is voltooid, geef daarna het resultaat terug
    const result = await getRandom(); // getRandom aanroepen met await
    console.log(`The number was ${result}`);
})();

// /**
// dit is een async functie die direct wordt uitgevoerd.
//  */


export {}
