var size = 8;
var grid = "";

for (var e = 1; e <= size; e++) {
    for (var i = 1; i <= size; i++) {
        grid += " ";
        if (i % 2 === 0) {
            grid += "#";
        }
      //if (i === size / 2) {grid += "\n";}
    }
    grid += "\n";
}

console.log(grid);

//for (var e = 1; e <= size; e++) {grid += "\n";}
