var Users = [{
    name: '하얀달',
    age: 23
}, {
    name: '검은해',
    age: 22
}, {
    name: '회색달',
    age: 22
}];
console.log('배열 요소의 수 : %d', Users.length);

for (var i = 0; i < Users.length; i++) {
    console.log('배열 요소 ' + i + '\n' + 'name : ' + Users[i].name + '\n' + 'age : ' + Users[i].age + '\n');
}
