// alert('Hello')

//데이터 타입
// {....} : object  *************
/* 
- 여러 값을 키(key)와 값(value)의 쌍으로 묶어 표현하는 자료구조 이다.
  쉽게 말하면 "관련된 데이터를 하나로 묶어 놓은 것"
*/

/* 
number(10, 50, 90, 3.14 ...), string("hello", 'hi'), boolean(tre, false)
object 예를 들어 사람의 키, 체중, 이름, 나이를 표현한다고하면
기존에는 var height = 180, var weight = 70 이런식이라면
{} 안에 : 와 , 로 표현

*/

var height = 180;
var weight = 70;
var name = "park";
var age = 35;

var man = {
    height: 180,
    weight: 70,
    myName: "park",
    age: 50
}

console.log('height: ', height); // height: 180
height = 190;
console.log('height: ', height);

var friendHeight = height; // 깊은 복사
console.log('friendHeight:', friendHeight);

friendHeight = 200;
console.log('height: ', height);
console.log('friendHeight:', friendHeight);

console.log('man: ', man);

var friendMan = man; //얕은 복사
console.log('friendMan: ', friendMan);

friendMan.myName = "kim";
console.log("--------------------------------")
console.log('man: ', man);
console.log('friendMan: ', friendMan);

// 참조 타입을 깊은 복사로 하는 방법
var obj1 = {
    myName: 'gildong'
}

// var obj2 = obj1; //얕은 복사
var obj2 = { ...obj1 } // 깊은 복사 방법(스프레드 연산, 전개 연산)

obj1.myName = 'chanho';

console.log('obj1:', obj1);
console.log('obj2:', obj2);

// -----------------------------------------------------
// object 사용방법
// 1. object 선언방법
var ourClass = {
    className: "1학년 1반",
    classLocation: "4층",
    classStudentCount: 20,
    classTeachername: "홍길동"
}

// 2. object 데이터 조회 방법 : . (도트접근 연산자) 이용
console.log('classLocation:', ourClass.classLocation);

// 3. object 데이터 변경방법 : . (도트접근 연산자) 이용
ourClass.classLocation = '5층';
console.log('classLocation:', ourClass.classLocation)

//4. object 데이터 삭제방법 : delete & .(도트접근 연산자)
delete ourClass.classLocation;
console.log('ourClass:', ourClass)

// 5. object의 value에는 모든 데이터 타입이 들어갈 수 있다. ******
var object01 = {
    key1:"abc",
    key2: 100,
    key3: 3.14,
    key4: true,
    key5:{
        key6: 100,
        key7: 3.141592,
        key8: 'hello',
        key9: false,
        key10: [10, 20, 50, {
            key11: 'abcde'
        }]
    }
}

console.log('object01: ', object01);

// Q1) number01과 number02의 값을 바꾸자(swaping)
var number01 = 10;
var number02 = 20;

console.log('number01: ', number01); //10
console.log('number02: ', number02); //20

var temp = number01;
number01 = number02;
number02 = temp;

console.log('number01: ', number01); //20
console.log('number02: ', number02); //10