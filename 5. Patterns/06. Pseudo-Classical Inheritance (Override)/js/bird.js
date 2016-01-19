function Bird(name, walkSpeed, flySpeed) {
    Bird.superclass.constructor.call(this, name, walkSpeed);

    this.flySpeed = flySpeed;
}

extend(Bird, Animal);

Bird.prototype.fly = function (time) {
    this.distance = this.distance + time * this.flySpeed;
};

Bird.prototype.walk = function(time) {
    return Bird.superclass.walk.call(this, time * 2);
};