function sortAnArrayBy2Criteria(data) {
    return data.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        }
        return a.localeCompare(b)
    }).join("\n");


}
sortAnArrayBy2Criteria([
    'alpha',
    'beta',
    'gamma'])