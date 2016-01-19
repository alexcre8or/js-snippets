function Animal(name, walkSpeed) {
    this.name = name;
    this.walkSpeed = walkSpeed;
}

Animal.prototype = {
    constructor: Animal,

    distance: 0,

    walk: function (time) {
        this.distance = this.distance + time * this.walkSpeed;
    },

    toString: function () {
        return this.name + " travelled  " + this.distance;
    }
};