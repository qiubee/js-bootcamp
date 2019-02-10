range = (start, end) => {
    let list = [];

    for (; start < end; start++) {
        if (list[list.length - 1] !== end)
            list.push(start);
    }

    if (start === end) {
        list.push(end);
    }

    return list
};

sum = (list) => {
    let sumOfList = 0;

    for (let listValue of list) {
        if (listValue !== list[list.length - 1]) {
            sumOfList += listValue;
        } else if (listValue === list[list.length - 1]) {
            sumOfList += listValue;
        }

    }

    return sumOfList
};

console.log(sum(range(1, 10)));
