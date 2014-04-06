var Cat = require("./Cat.js");

var cat1 = new Cat(12, 'Tom');
cat1.setAge(100);
console.log(cat1.getAge());                 // prints 100

var cat2 = new Cat(100, 'Jerry');
console.log(cat1.equals(cat2));             // prints false

var sameAsCat1 = new Cat(100, 'Tom');
console.log(cat1.equals(sameAsCat1));       // prints true

var sameAsCat2 = new Cat();
console.log(cat2.equals(sameAsCat2));       // prints false

sameAsCat2.fill({name: "Jerry", age: 100});
console.log(cat2.equals(sameAsCat2));       // prints true