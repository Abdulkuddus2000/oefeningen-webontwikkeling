import { resolve } from "path";

const slowSum = (a: number, b: number) => {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b);
        },1000)
    });
}

const slowMult = (a: number, b: number) => {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            resolve(a*b);
        },1500)
    });
}

const slowDiv = (a: number, b: number): Promise<number> => {
    return new Promise((resolve, reject) => {
        if (b === 0){
            reject("Je kan niet delen door nul");
            return;
        } 
        setTimeout(() => {
            resolve(a / b);;
        }, 2000);
    });
}

/* oef. 1 */
const oef1 = () => {
    const result = slowSum(5, 8);
    result.then((result) => {
        console.log(result);
    });
}
// oef1(); // test


// oef. 2
const oef2a = () => {
    slowSum(5, 8)
        .then((sum) => {
            console.log("Som: ", sum);
            return slowMult(sum, 2); // belangrijke return
        })
        .then((multiResult) => {
            console.log("Vermenigvuldiging: ", multiResult);
        })
        .catch((error) => {
            console.error("Er ging iets mis: ", error);
        });
}

// oef2a(); // test

const oef2b = async () => {
    const sum = await slowSum(5, 8);
    const product = await slowMult(sum, 2);

    console.log("Som is: ", sum); // 13
    console.log("Product is: ", product); // 26
};

// oef2b(); // test


// oef. 3
const oef3a = () => {
    slowDiv(5, 8).then((result) => console.log("1 + 5 = ", result));   
}

const oef3b = async () => {
    const result = await slowDiv(2, 5);
    console.log("1 + 5 = ", result);
}
// oef3a(); // test
// oef3b(); // test


// oef. 4
const oef4a = () => {
    slowDiv(6, 3).then((result) => console.log("6 / 2 = ", result))
}    

const oef4b = async () => {
    const result = await slowDiv(6, 3);
    console.log("6 / 2 = ", result);
}

// oef4a(); // test
// oef4b(); // test


// oef. 5
const oef5a = () => {
    slowDiv(6, 0)
    .then((result) => { console.log(); })
    .catch((error) => console.error("Foutmelding:", error));
}

const oef5b = async () => {
    const result = await slowDiv(6, 0);
    console.log(result);
}

// oef5a(); // test
// oef5b(); // test



////// test ruimte:
const eindResultaat = async () => {
    try {
        await oef5a(); // slowDiv(6, 0) → error
    } catch {}

    const som = await slowSum(1, 5);
    console.log("1 + 5 = " + som);

    const deel = await slowDiv(som, 3);
    console.log(`(${som} / 3) = ${deel}`);

    const product = await slowMult(som, deel);
    console.log(`(1 + 5) * ${deel} = ${product}`);
};

eindResultaat();





export {}