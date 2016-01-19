function Bird(name, walkSpeed, flySpeed) {
    Animal.call(this, name, walkSpeed);

    this.flySpeed = flySpeed;
    this.fly = function (time) {
        this.distance = this.distance + time * this.flySpeed;
    };
    this.walk = (function(base) {
        return function(time) {
            return base(time * 2);
        };
    })(this.walk.bind(this));
};

