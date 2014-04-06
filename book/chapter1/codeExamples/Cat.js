function Cat(age, name) {
    this.name = name || null;
    this.age = age || null;
}

Cat.prototype.getAge = function() {
    return this.age;
}

Cat.prototype.setAge = function(age) {
    this.age = age;
}

Cat.prototype.getName = function(name) {
    return this.name;
}

Cat.prototype.setName = function(name) {
    this.name = name;
}

Cat.prototype.equals = function(otherCat) {
    return otherCat.getName() === this.getName()
        && otherCat.getAge() === this.getAge();
}

Cat.prototype.fill = function(newFields) {
    for (var field in newFields) {
        if (this.hasOwnProperty(field) && newFields.hasOwnProperty(field)) {
            if (this[field] !== 'undefined') {
                this[field] = newFields[field];
            }
        }
    }
};

module.exports = Cat;