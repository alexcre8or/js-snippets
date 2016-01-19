function Animal(name, walkSpeed) {
    var self = {
        name: name,
        walkSpeed: walkSpeed,
        distance: 0,

        walk: function(time) {
            this.distance = this.distance + time * this.walkSpeed;
        },

        toString: function() {
            return this.name + " travelled  " + this.distance;
        }
    };

    self.constructor = Animal;

    return self;
};