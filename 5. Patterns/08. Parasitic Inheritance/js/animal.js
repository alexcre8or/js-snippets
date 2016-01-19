function Animal(name, walkSpeed) {
    this.name = name;
    this.walkSpeed = walkSpeed;
    this.distance = 0;

    this.walk = function(time) {
        this.distance = this.distance + time * this.walkSpeed;
    };

    this.toString = function() {
        return this.name + " travelled  " + this.distance;
    };
};