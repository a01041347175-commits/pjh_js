/* 
연산자 종류
산술 연산자 : +, -, *, /, %(나머지), **(제곱승)
할당(대입) 연산자 : =, +=, -+, *=, /=, %=
비교 연산자 : ==, !=, >, >=, <, <=, ===, !==
논리 연산자 : &&, ||, !
증감 연산자 : ++, --
삼항 연산자 : 3개의 항을 사용하는 연산자, 조건? 값1 : 값2
*/

// 비교 연산자
// Q 범퍼카 탑승 가능 판별하기
// 놀이동산에서 범퍼카는 신장이 120cm 이상인 어린이만 탑승할 수 있다.
// 신장을 입력면 범퍼카를 탑승할 수 있는지 여부를 알려주는 프로그램.
// 탑승가능은 true, 탑승 불가능은 false로 출력

// var height = Number(prompt('어린이의 신장을 입력하세요'));
// console.log(`탑승가능 여부: ${height >= 120}`);

// 비연산자 && 피연산자 (양쪽 다 true여야 true, 하나라도 false면 false)
// 120cm 이상이고 180cm 미만인 경우 탑승가능
// console.log(`탑승가능 여부: ${height >= 120 && height < 180}`);

var num1 = 5;
var num2 = 8;

console.log(num1 != num2);  // true
console.log(num1 == num2);  // false
console.log(num1 > num2);   // false
console.log(num1 >= num2);  // false
console.log(num1 < num2);   // true
console.log(num1 <= num2);  // true

// ==, !=  vs  ===, !==
console.log(`5 == '5': ${5 == '5'}`); // true
console.log(`5 === '5': ${5 === '5'}`); // false 주로 사용

console.log(`5 != '6': ${5 != '6'}`); // true
console.log(`5 !== '6': ${5 !== '6'}`); // true

// 논리연산자 &&(AND), ||(OR), !(NOT)
// &&(AND) : 모두 true여야 결과가 true
// ex) : true && true => true
// ex) : false && true => false
// ex) : true && false => false
// ex) : false && false => false

// ||(OR) : 하나라도 true가 있으면 결과는 true
// ex) : true || true => true
// ex) : false || true => true
// ex) : true || false => true
// ex) : false || false => false

// !(NOT) : 현재 상태를 부정
// ex) : !true => false
// ex) : !false => true
// ex) : !!false => false
/*
// Q 컴퓨터와 홀짝게임

var random = Math.random(); // 난수 발생(0.0~1.0)
// console.log(`random: ${random}`);

random = parseInt(random * 10);
// console.log(`random: ${random}`);

var userSelectedNumber = Number(prompt('1. 짝     2. 홀'));

console.log(`WIN: ${(random % 2 === 0) && userSelectedNumber === 1}`); // O
console.log(`WIN: ${(random % 2 !== 0) && userSelectedNumber === 2}`); // O
console.log(`LOSE: ${(random % 2 !== 0) && userSelectedNumber === 2}`); // X
console.log(`LOSE: ${(random % 2 !== 0) && userSelectedNumber === 1}`); // X

console.log(`random: ${random}`);
console.log(`userSelectedNumber: ${userSelectedNumber}`);
*/
// Q (10 > -10) && (3.14 > 0) || (-1 == 0) 
//    true && true || false
//        true || false
//             true

// Q 다음 지문을 읽고 밑줄 친 부분에 맞는 코드를 완성하시오
// 사무실 냉/난방기는 실내 온도가 16도 이하 또는 28도 초과 시 작동한다.
// temperature <= (16) (||) temperature > (28)

/*
// 증감연산자(자동 증감 연산자)
var score = 80;
console.log(`score: ${score}`);

// score = score + 1;
// score += 1;
score++;
console.log(`score: ${score}`);
score--;
console.log(`score: ${score}`);

var myScore = 90;
console.log(`myScore: ${myScore}`); // 90

// var result = myScore++; // 후위 연산자
// console.log(`result: ${result}`); // 90

var result = ++myScore; // 전위 연산자
console.log(`result: ${result}`); // 91
*/

/*
// 삼항(조건식) 연산자
var resultVar = (5 > 1) ? '5는 1보다 크다.' : '5는 1보다 크지 않다.'; 
// 조건의 결과가 true라면 앞의 값이 할당, false라면 뒤의 값이 할당.
console.log(`resultVar: ${resultVar}`);

// Q 사용자가 시험 점수를 입력하고, 점수가 80이상 이면 합격, 그렇지 않으면 불합격 출력
var exampleScore = Number(prompt('본인 시험 점수 입력: '));
var resultMessage = Number(exampleScore) >= 80 ? '합격' : '불합격';
console.log(`resultMessage: ${resultMessage}`);

// 120cm 이상이고 180cm 미만인 경우 탑승가능
console.log(`탑승가능 여부: ${height >= 120 && height < 180}`);
var childHeight = prompt('어린이 신장 입력: ');
var msg = Number(childHeight) >= 120 && Number(childHeight) < 180 ? '탑승가능' : '탑승불가능';
console.log(`msg: ${msg}`);
*/

// Q DW마트는 수입과 지출을 입력하면 흑자인지 적자인지 판별하는 프로그램을 도입하려고 한다.
//  마트 수익 결과를 알려주는 프로그램을 만들어라.
var input = prompt('수입 입력: ');
var output = prompt('지출 입력: ');
var profit = Number(input - output) > 0 ? '흑자' : '적자';
console.log(`profit: ${profit}`, Number(input-output));