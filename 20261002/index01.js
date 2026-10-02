// 함수란?
/*
https://hoazzinews.tistory.com/119
함수(Function)란, 특정 작업(로직)을 수행하는 코드 블록에 이름을 붙여 재사용할 수 있도록 만든 것입니다.
(기능을 재사용 하는것)

즉, 여러 줄의 코드를 하나의 “기능 단위”로 묶어두는 것입니다.
필요할 때마다 함수를 호출하여 같은 동작을 반복할 수 있습니다.

 [함수의 특징]
코드를 재사용할 수 있다.
코드의 가독성과 유지보수성이 높아진다.
입력값(매개변수)을 받아, 결과값(반환값)을 돌려줄 수 있다.
*/

// 기본 문법
/*[안의 내용은 선택사항]
function 함수이름([input data]) {
    함수 실행부 
}
*/

// '안녕하세요.'를 출력하는 함수를 정의해보자

// function hello() {                  // 함수 정의(선언 + 실행부)
//     console.log('안녕하세요.');
// }

// hello(); // 함수 호출
// hello();

// for (var i = 0; i < 100; i++) {
//     hello();
// }

// 함수 선언의 다른 방법 - 1
/* var 변수명 = function() {
    실행부
}
*/

// var hello = function() {
//     console.log('안녕하세요.')
// }
// hello();

// 함수 선언의 다른 방법 - 2 화살표 함수(arrow function)
/*
const 함수이름 = () => {
    실행부
}
*/
// const hello = () => {
//     console.log('안녕하세요.')
// }
// hello();

// Q 현재 시스템의 날짜와 시간을 출력하는 함수를 정의하고 호출하자
// function now () {
//     console.log(new Date());
// }
// now();

// var today = function() {
//     console.log(new Date());
// }
// today();

// const nowTime = () => {
//     console.log(new Date());
// }
// nowTime();

// Q 현재 시스템의 날짜와 시간을 다음과 같이 출력하는 함수를 정의하고 호출하자
/*
    언어 선택 1. kor   2. eng
    kor: 2026년 10월 2일 14시 27분 30초
    eng: 2026/10/2 14:27:30
*/
// var languageSelect = Number(prompt('언어를 선택하시오: 1. kor   2. eng'));
// function korTime () {
//     console.log(`${now.getYear()}년 ${now.getMonth()}월 ${now.getDate()}일 ${now.getHours()}시 ${now.getMinutes()}분 ${now.getSeconds()}초`);
// }
// function engTime () {
//     console.log(`${now.getYear()}'/'${now.getMonth()}'/'${now.getDate()} ${now.getHours()}':'${now.getMinutes()}':'${now.getSeconds()}`);
// }
// if (languageSelect === 1) {
//     console.log(korTime());
// } else {
//     console.log(engTime());
// }


// const printToday = () => {
//     var today = new Date();

//     var selectedMenuNumber = prompt('1.KOR   2.ENG');

//     var year = today.getFullYear();
//     var month = today.getMonth();
//     var date = today.getDate();
//     var hours = today.getHours();
//     var minutes = today.getMinutes();
//     var seconds = today.getSeconds();

//     switch(selectedMenuNumber) {
//         case '1' :
//             console.log(`${year}년 ${month}월 ${date}일 ${hours}시 ${minutes}분 ${seconds}초`);
//             break;
//         case '2' :
//             console.log(`${year}/${month}/${date} ${hours}:${minutes}:${seconds}`)
//             break;
//     }
// }

// printToday();

// 모듈화의 정의(모듈 이식)

// Q 온도센서 작동 시스템 만들기
/*
온도센서를 작동 시키고 중단 시키는 함수를 선언하고 호출하자
*/
// function startTemperatureSensor() {
//     console.log('START TEMPERATURE SENSOR')
// }

// function endTemperatureSensor() {
//     console.log('END TEMPERATURE SENSOR')
// }

// startTemperatureSensor();
// endTemperatureSensor();

// Q) 내 노트북은 몇 인치일까?
/*
고등학교 졸업 기념으로 노트북을 하나 장만했습니다.
노트북 사이즈에꼭 맞는 파우치를 하나 구매하려고 하는데 사이즈 표에 인치로만 표시되
어있습니다. cm를 인치로 바꿔주는 함수를 만들어봅시다. 
1 inch = 2.54cm
1 cm = 0.393701
*/
// function transfer() {
//     var sizeInput = Number(prompt('Size: '));
//     console.log(`${sizeInput*0.393701} 'inch'`);
// }
// transfer();

// // Q 이동 거리를 계산하는 함수 (거리 = 시간 * 속도)
// /*
// 길동이는 5시간 동안 3km의 속도로 등산을 했다.
// 길동이가 등산한 시간과 속도를 입력하면 이동한 거리를 계산해주는 프로그램을 함수를 이용하여 만들자
// */
// function distance() {
//     var hour = Number(prompt('시간: '));
//     var speed = Number(prompt('속도: '));
//     console.log(`${hour * speed} 'km'`);
// }
// distance();


// 함수 내에서 또 다른 함수를 호출할 수 있다.
// function fun1() {
//     console.log('fun1() CALLED');
// }

// function fun2() {
//     console.log('fun2() CALLED');
// }

// function fun3() {
//     fun1();
//     fun2();
//     console.log('fun3() CALLED');
// }

// fun3();

// Q 계산기 프로그램
/*
사용자가 숫자 2개를 입력하고 연산자(4칙 연산자)를 선택하면 연산결과가 출력되는 프로그램을 만들자
*/

// function add() {
//     console.log(`덧셈 결과: `);
//     console.log(`${inputNumber1} + ${inputNumber2} = ${inputNumber1 + inputNumber2}`);
// }

// function sub() {
//     console.log(`뺄셈 결과: `);
//     console.log(`${inputNumber1} - ${inputNumber2} = ${inputNumber1 - inputNumber2}`);
// }

// function mul() {
//     console.log(`곱셈 결과: `)
//     console.log(`${inputNumber1} * ${inputNumber2} = ${inputNumber1 * inputNumber2}`);
// }

// function div() {
//     console.log(`나눗셈 결과: `)
//     console.log(`${inputNumber1} / ${inputNumber2} = ${inputNumber1 / inputNumber2}`);
// }

// function calculator() {
//     if (selectedOperator === 1) {
//         add();
//     } else if (selectedOperator === 2) {
//         sub();
//     } else if(selectedOperator === 3) {
//         mul();
//     } else if (selectedOperator === 4) {
//         div();
//     }
// }

// var inputNumber1 = Number(prompt('첫 번째 숫자를 입력하시오.'));
// var selectedOperator = Number(prompt('연산자 선택 : 1. 덧셈   2. 뺄셈   3. 곱셈   4. 나눗셈'));
// var inputNumber2 = Number(prompt('두 번째 숫자를 입력하시오.'));

// calculator();

