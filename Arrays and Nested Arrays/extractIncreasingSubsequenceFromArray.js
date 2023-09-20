function extractIncreasingSubsequence(data) {
    let result = [];
    let biggestOne = data.shift();
    result.push(biggestOne);

    data.forEach(x => {
       if(x >= biggestOne) {
        result.push(x);
        biggestOne = x;
       } 
    });

    return result;


}

extractIncreasingSubsequence([
    1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    )