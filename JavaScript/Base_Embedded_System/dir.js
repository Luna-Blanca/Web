console.log('splice에 대해 설명');
console.log('splice(index, n, a, b, ...)');
console.log('index = 삽입 or 삭제 시작 인덱스');
console.log('n = 삭제 요소 갯수');
console.log('a, b, ... = 추가할 리스트');
console.log('\n');
console.log('회색달의 data 맨 끝에 추가');
var people = [{
    name: '하얀달',
    age: 23
}, {
    name: '검은해',
    age: 20
}];
people.splice(1, 0, {
    name: '회색달',
    age: 20
});
console.dir(people);
console.log('\n');
console.log('회색달의 data 삭제');
people.splice(1, 1);
console.dir(people);
console.log('\n');
console.log('빨간달과 노란달 data 맨 끝에 추가하고 검은달 data 삭제');
people.splice(2, 0, {
    name: '빨간달',
    age: 27
}, {
    name: '노란달',
    age: 25
})
people.splice(1, 1);
console.dir(people);
