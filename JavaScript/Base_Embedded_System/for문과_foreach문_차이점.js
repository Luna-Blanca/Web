console.log('for문과 foreach문 차이점 확인');

var Users = [{
    name: '하얀달',
    age: 23
}, {
    name: '검은달',
    age: 20
}, {
    name: '회색달',
    age: 22
}];
console.log('for문을 사용할 경우');
console.log('배열 요소의 수 : %d', Users.length);

for (var i = 0; i < Users.length; i++) {
    console.log('배열 요소 #' + i + ' : %s', Users[i].name);
}

console.log('\n');

console.log('foreach문을 사용할 경우');
console.log('배열 요소의 수 : %d', Users.length);
Users.forEach(function (item, index) {
    console.log('배열 요소 #' + index + ' : %s', item.name);
})
