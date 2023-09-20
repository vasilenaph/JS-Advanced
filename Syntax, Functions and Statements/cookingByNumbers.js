function cookingByNumbers(num, op1, op2, op3, op4, op5) {
    let myNum = Number(num);
    let arrOp = [];
    arrOp.push(op1)
    arrOp.push(op2)
    arrOp.push(op3)
    arrOp.push(op4)
    arrOp.push(op5)

    for (i = 0; i < arrOp.length; i++) {
        switch (arrOp[i]) {
            case "chop": myNum /= 2;
                break;
            case "dice": myNum = Math.sqrt(myNum);
                break;
            case "spice": myNum += 1;
                break;
            case "bake": myNum *= 3;
                break;
            case "fillet": myNum *= 0.80;
                break;
        }
        console.log(myNum);
    }

}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');