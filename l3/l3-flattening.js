flattenArray = (array) => {
    return array.reduce((accumulator, currentValue) => {
        return accumulator.concat(currentValue);
    });
}

let array = [[994, 1008], [113392, 11508], [11513, 11520]];

console.log(flattenArray(array));
