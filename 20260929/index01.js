// 반복문(for문, while문)
// for문 : 횟수에 의한 반복 실행
// while문 : 조건에 의한 반복 실행
/*
for(초기화; 조건식; 단계) {
    반복 실행문
}
*/
/*
for(var i = 1; i < 11; i++) {
    console.log('hello ', i);
}

// 1부터 10까지의 정수의 합
var sum = 0;
for(var i = 1; i <= 10; i++) {
    sum += i;
}
console.log(`sum: ${sum}`);

// Q 1~10까지 정수의 합을 구하되, 홀수의 합만 구하시오
var sum1 = 0;
for(var i = 1; i <= 10; i+=2) {
    sum1 += i
}
console.log(`sum1: ${sum1}`);
*/
// Q 사용자가 원하는 구구단을 입력하면 해당 구구단이 출력된다.
/*
var sum2 = 1;
for(var i = 1; i < 9; i+=1) {
    sum2 *= i
}
var nine = prompt('구구단: ', Number(sum2));
console.log(`nine: ${nine}`);
*/
/*
var inputNumber = Number(prompt('구구단: '));
for(var i = 1; i < 10; i++) {
    console.log(`${inputNumber} * ${i} = ${inputNumber * i}`);
}
*/
// Q 1단부터 9단까지 전체 구구단을 출력하는 프로그램
/*
for(var nine = 1; nine < 10; nine++) {
    for(var i = 1; i < 10; i++) {
        console.log(`${nine} * ${i} = ${nine * i}`);
    }
}
*/

/*
for(var nine = 1; nine < 10; nine++) {
    for(var i = 2; i < 10; i++) {
        console.log(`${i} * ${nine} = ${nine * i}`);
    }
}
*/

for(var i = 1; i < 10; i++) {
    var result = ' ';
    for(var j = 2; j < 10; j++) {
        //result += j + ' * ' + i + ' = ' + (j * i) +'\t';
        result += `${j} * ${i} = ${j*i} \t`
    }
    console.log(result);
}

