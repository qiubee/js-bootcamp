class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get length() {
        return Math.sqrt((this.x ** 2) + (this.y ** 2));
    }
}

Vec.prototype.plus = function (vector) {
    let x = this.x + vector.x;
    let y = this.y + vector.y;
    return new Vec(x, y);

}

Vec.prototype.minus = function (vector) {
    let x = this.x - vector.x;
    let y = this.y - vector.y;
    return new Vec(x, y);
}


let vec1 = new Vec(5, 6);
let vec2 = new Vec(15, 35);

console.log(vec1.plus(vec2));
console.log(vec2.minus(vec1));

console.log(vec1.length);
console.log(vec2.length);
