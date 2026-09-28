/* 
연산자 종류
산술 연산자 : +, -, *, /, %(나머지), **(제곱승)
할당(대입) 연산자 : =, +=, -+, *=, /=, %=
비교 연산자 : ==, !=, >, >=, <, <=, ===, !==
논리 연산자 : &&, ||, !
증감 연산자 : ++, --
삼항 연산자 : 3개의 항을 사용하는 연산자, 조건? 값1 : 값2
*/

// 산술 연산자
var num1 = 10;
var num2 = 20;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(10 % 3);
console.log(3 ** 2);
console.log(3 ** 5);

//Q1) DW전자 회사의 1분기 매출의 총합을 구하고 합니다. 프로그램을 만들어보세요
// 사용자가 1월, 2월, 3월 매출액을 입력하면 1분기 총합을 출력하자.

/*
var sales1 = prompt('1월 매출 입력: '); //100
var sales2 = prompt('2월 매출 입력: '); //200
var sales3 = prompt('3월 매출 입력: '); //300
console.log('1분기 매출 총액:', (sales1 + sales2 + sales3); // 100200300
*/

/*
var sales1 = parseInt(prompt('1월 매출 입력: ')); //100
var sales2 = parseInt(prompt('2월 매출 입력: ')); //200
var sales3 = parseInt(prompt('3월 매출 입력: ')); //300
console.log('1분기 매출 총액:', (sales1 + sales2 + sales3)); // 600
*/

//var sales1 = Number(prompt('1월 매출 입력: ')); //100
//var sales2 = Number(prompt('2월 매출 입력: ')); //200
//var sales3 = Number(prompt('3월 매출 입력: ')); //300
//console.log('1분기 매출 총액:', (sales1 + sales2 + sales3)); // 600

//문자열 덧셈
console.log("Hello " + "world");// 덧셈 연결 연산자

//뺄셈 연산
var num3 = 10;
var num4 = 20;
console.log(num3 - num4);

//Q2 DW전자에서 1분기 수익을 계산하려고 한다.
// 사용자가 1분기 매출액과 매입액을 입력하면 수익을 계산해주는 프로그램을 만들어보자
//var sales = Number(prompt('1분기 매출 입력: '));
//var purchasse = Number(prompt('1분기 매입 입력: '));
//var profit = sales - purchasse;
//console.log('수익: ', profit);

// 곱셈, 나눗셈
//Q 방의 넓이 구하기
// 가로, 세로 길이를 입력하면 방의 넓이를 계산해주는 프로그램
//var width = Number(prompt('가로 길이 입력: '));
//var height = Number(prompt('세로 길이 입력: '));
//console.log('방의 넓이: ', width * height);

// 템플릿 문자열 (``)
//console.log(`방의 넓이: ${width * height}`);

//Q 신체 질량 지수(BMI)
// 사용자가 몸무게, 신장을 입력하면 신체 질량 지수 출력
// BMI = 몸무게(kg) / 신장의 제곱(m)
//var weight = Number(prompt('몸무게(kg) 입력: '));
//var height = Number(prompt('신장(m) 입력: '));
//var bmi = parseInt(weight / (height ** 2));
//console.log(`BMI: ${bmi}`);

//나눗셈 주의 사항
// 숫자 0을 어떤 수로 나누어도 결과는 항상 0
// console.log(0 / 100000000); // 0

// 숫자를 0으로 나눌수 없다.
// console.log(1000000000/ 0); // error

//Q 홀짝 게임
//컴퓨터가 홀짝 진행, 유저가 정답
var random = Math.random(); //0.0~1.0
console.log(random);
random = parseInt(random * 10);
console.log(random);

var userIputNumber = Number(prompt('홀짝 맞추세요. 1. 홀   2. 짝'));
console.log(`random: ${random}`);