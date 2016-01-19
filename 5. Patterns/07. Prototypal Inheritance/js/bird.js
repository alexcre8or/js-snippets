function Bird(name, walkSpeed, flySpeed) {
    var base = new Animal(name, walkSpeed);
    var self = object(base);

    self.flySpeed = flySpeed;
    self.fly = function(time) {
        this.distance = this.distance + time * this.flySpeed;
    };
    self.walk = function(time) {
        return base.walk.call(this, time * 2);
    };

    self.constructor = Bird;

    return self;
};

