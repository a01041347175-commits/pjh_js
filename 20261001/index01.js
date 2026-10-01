// Q 

var now = new Date();
var date = now.getDate();
console.log(`오늘 일자: ${date}`);
var carNumber = Number(prompt("차량번호를 입력하세요: "));

if (carNumber % 2 === date % 2) {
    alert('귀하의 차량은 입차 가능합니다.');
} else {
    alert('귀하의 차량은 입차 불가합니다.')
}


/*
var today = new Date();
var date = today.getDate();

var carNumber = Number(prompt('차량번호 입력: '));

if (date % 2 === 0) {
    if (carNumber % 2 === 0){
        alert('입차가능')
    } else {
        alert('입차불가')
        }
} else {
    if (carNumber % 2 === 0){
        alert('입차불가')
    } else {
        alert('입차가능')
        }
    }
*/
/*
var today = new Date();
var date = today.getDate();

var carNumber = Number(prompt('차량번호 입력: '));

if (date % 2 === 0) {
    
    //carNumber % 2 === 0 ? alert('입차가능') : alert('입차불가');
    var resultStr = carNumber % 2 === 0 ? '입차가능' : '입차불가';
    alert(resultStr)
    
} else {
    
    //carNumber % 2 === 0 ? alert('입차불가') : alert('입차가능');
    var resultStr = carNumber % 2 === 0 ? '입차불가' : '입차가능';
    alert(resultStr)
    }
*/
