function listOfNames(data) {

    data.sort((a, b) => a.localeCompare(b))
    .forEach((x, i) => {
        console.log(`${i + 1}.${x}`);
    })
    
}
listOfNames(["John", "Bob", "Christina", "Ema"])