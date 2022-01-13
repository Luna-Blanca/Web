var Users = [{
    name: '하얀달',
    age: 23
}, {
    name: '검은해',
    age: 22
}, {
    name: '회색달',
    age: 21
}];
var add = function (a, b) {
    return a + b;
};
Users.push(add)
console.log('배열 요소의 수 : %d', Users.length);
console.log('세번째 요소로 추가된 함수 실행 : %d', Users[3](10, 10));
console.log('First : %d, %s', Users[0].)
