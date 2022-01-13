var Users = [{name : '하얀달', age : 20}, {name : '검은달', age : 23}];
Users.push({name:'하얀달', age:23});
console.log('사용자 수 : %d', Users.length);
console.log('첫번째 사용자 이름 : %s', Users[0].name);
console.log('첫번째 사용자 나이 : %s', Users[0].age);