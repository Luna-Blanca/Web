var person = [{
    name: '하얀달',
    age: 23
}, {
    name: '검은달',
    age: 22
}, {
    name: '회색달',
    age: 20
}];
console.log('배열 요소의 수 : %d', person.length);

console.log('\nforEach 구문 사용하기');
person.forEach(function (item, index) {
    console.log('배열 요소 #' + index + ' : %s', item.name);
});
