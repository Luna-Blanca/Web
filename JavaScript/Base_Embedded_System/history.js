function add(a, b, callback) {
    var result = a + b;
    callback(result);
    var history = function() {
        return a + '+' + b + '+' + '=' + result;
    };
}

var add_history = add(10, 10, function(result) {
    console.log('파라미터로 전달된 콜백 함수 호출됨.');
    console.log('Add 10 + 10 = %d', result);
});
console.log('결과 값으로 받은 함수 실행 결과 : ' + add_history());