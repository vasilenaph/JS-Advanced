function printEveryNElementFromAnArray(arrayOfStrings, n) {
    let result = [];

    for(let i = 0; i < arrayOfStrings.length; i+=n) {
        result.push(arrayOfStrings[i]);
    }
    return result;

}

printEveryNElementFromAnArray(['5', 
'20', 
'31', 
'4', 
'20'], 
2)