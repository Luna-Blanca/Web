var Person = {};
Person["age"] = 23;
Person["name"] = '하얀달';
Person.add = function (a, b) {
    return a + b;
};
console.log('Add = %d', Person.add(10, 10));
