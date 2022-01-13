var Users = [{
    name: '하얀달',
    age: 20
}, {
    name: '검은달',
    age: 23
}];
Users.push({
    name: '회색달',
    age: 23
});
console.log('사용자 수 : %d', Users.length);
console.log('First username : %s', Users[0].name);
console.log('First userage : %d', Users[0].age);
console.log('%s의 나이 = %d', Users[0].name, Users[0].age);
console.log(Users[0].name, '의 나이 =', Users[0].age);
