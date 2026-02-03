const delay = (delay: number): Promise<void> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, delay);
    });
}

(async() => {
    await Promise.all([delay(1000), delay(10000), delay(15000)])
    console.log("Done!");
})();

/* 
console.log() zal over 15 seconden uitgevoerd worden:
start alle beloftes teglijk
wacht totdat alle promises zijn afgerond
nadat de langste promise in de lijst is afgerond, zal console.log() uitgevoerd worden
*/

export {}