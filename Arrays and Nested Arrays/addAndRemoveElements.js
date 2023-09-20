function addAndRemoveElements(data) {
    let n = 1;
    let arr = [];

    data.forEach(x => {
        n++;
        if( x === "add") {
            return arr.push(n);
        }
        return arr.length > 0 && arr.pop();
    })

    arr.length > 0 ? console.log(arr.join("\n")) : console.log("Empty");


}

addAndRemoveElements(['add', 
'add', 
'add', 
'add']
)