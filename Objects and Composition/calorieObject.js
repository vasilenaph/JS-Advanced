function calorieObject(data) {

    const calorieObject = {};

    for(let i = 0; i < data.length; i+=2) {
        const food = data[i];
        const cal = Number(data[i+1]);

        Object.assign(calorieObject, { [food]: cal });
    }

    console.log(calorieObject);
    



}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])