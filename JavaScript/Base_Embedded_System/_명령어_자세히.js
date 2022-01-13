var Person = [
    { name : '하얀달', age : 23},
    { name : '검은달', age : 27}
]
console.log('---------------------------------------------------------------------');
console.log(' unshift(넣고싶은 값) - 배열의 맨 앞에 요소를 추가한다.');
for (var i = 0; i<Person.length; i++) {
    console.log(' 배열 요소 #' + i + ' : %s , %d', Person[i].name, Person[i].age);
}
console.log('     ↓        ↓        ↓');
Person.unshift({
    name : '회색달', age : 20
})
for (var i = 0; i<Person.length; i++) {
    console.log(' 배열 요소 #' + i + ' : %s , %d', Person[i].name, Person[i].age);
}
console.log('---------------------------------------------------------------------');
console.log(' shift(넣고싶은 값) - 배열의 맨 앞에 요소를 삭제한다.');
for (var i = 0; i<Person.length; i++) {
    console.log(' 배열 요소 #' + i + ' : %s , %d', Person[i].name, Person[i].age);
}
console.log('     ↓        ↓        ↓');
Person.shift({
    name : '회색달'
})
for (var i = 0; i<Person.length; i++) {
    console.log(' 배열 요소 #' + i + ' : %s , %d', Person[i].name, Person[i].age);
}
console.log('---------------------------------------------------------------------');
console.log(' push(넣고싶은 값) - 배열의 맨 뒤에 요소를 추가한다.');
for (var i = 0; i<Person.length; i++) {
    console.log(' 배열 요소 #' + i + ' : %s , %d', Person[i].name, Person[i].age);
}
console.log('     ↓        ↓        ↓');
Person.push({
    name : '회색달', age : 20
})
for (var i = 0; i<Person.length; i++) {
    console.log(' 배열 요소 #' + i + ' : %s , %d', Person[i].name, Person[i].age);
}
console.log('---------------------------------------------------------------------');
console.log(' pop(넣고싶은 값) - 배열의 맨 뒤에 요소를 삭제한다.');
for (var i = 0; i<Person.length; i++) {
    console.log(' 배열 요소 #' + i + ' : %s , %d', Person[i].name, Person[i].age);
}
console.log('     ↓        ↓        ↓');
Person.pop({
    name : '회색달'
})
for (var i = 0; i<Person.length; i++) {
    console.log(' 배열 요소 #' + i + ' : %s , %d', Person[i].name, Person[i].age);
}
console.log('---------------------------------------------------------------------');
console.log(' splice(시작 인덱스값, 삭제할 갯수, 넣고싶은 값) - 여러 개의 객체를 요소로 추가하거나 삭제합니다.');
console.log(' 하얀달과 검은달 사이에 data를 추가하기')
for (var i = 0; i<Person.length; i++) {
    console.log(' 배열 요소 #' + i + ' : %s , %d', Person[i].name, Person[i].age);
}
console.log('     ↓        ↓        ↓');
Person.splice(1, 0, {
    name : '회색달', age : 20
}, {
    name : '빨간달', age : 25
}, {
    name : '노란달', age : 21
})
for (var i = 0; i<Person.length; i++) {
    console.log(' 배열 요소 #' + i + ' : %s , %d', Person[i].name, Person[i].age);
}
console.log('---------------------------------------------------------------------');
console.log(' splice(시작 인덱스값, 삭제할 갯수, 넣고싶은 값) - 여러 개의 객체를 요소로 추가하거나 삭제합니다.');
console.log(' 빨간달만 data를 삭제하기');
for (var i = 0; i < Person.length; i++) {
    console.log(' 배열 요소 #' + i + ' : %s , %d', Person[i].name, Person[i].age);
}
console.log('     ↓        ↓        ↓');
Person.splice(2,1);
for (var i = 0; i < Person.length; i++) {
    console.log(' 배열 요소 #' + i + ' : %s , %d', Person[i].name, Person[i].age);
}
console.log('---------------------------------------------------------------------');