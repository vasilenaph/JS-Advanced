function townPopulation(data) {

    let newObj = {};

    for (let townAsString of data) {
        let [name, population] = townAsString.split(" <-> ");
        population = Number(population);

        if (newObj[name] !== undefined) {
            population += newObj[name];
        }

        newObj[name] = population;
    }

    for (let town in newObj) {
        console.log(`${town} : ${newObj[town]}`)
    }


}

townPopulation(
['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000'])
