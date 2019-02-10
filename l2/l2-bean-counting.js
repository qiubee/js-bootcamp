// Shows amount of uppercase B characters
countBs = (string) => {
    let bAmount = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "B") {
            bAmount += 1;
        }
    }
return "Amount of B's: " + bAmount;
};

console.log(countBs("Boot"));


// Shows amount of any given character
countChar = (string, character) => {
    let charAmount = 0;
    for (let value of string) {
        if (value === character) {
            charAmount += 1;
        }
    }

    let answer = charAmount + " " + character;

    if (charAmount === 1) {
        return answer
    } else {
        return answer + "'s"
    }
};

console.log(countChar("Bidndua", "d"));
