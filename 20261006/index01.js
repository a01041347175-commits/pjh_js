// document.addEventListener('DOMContentLoaded', function() {
//     console.log('doDocumentReady() CALLED!!');
    /*
    var divEleById = document.getElementById('wrap');
    console.log(`divEleById: ${divEleById}`);

    var divEleByClassName = document.getElementsByClassName('div_wrap');
    console.log(`divEleByClassName: ${divEleByClassName}`);
    console.log(`divEleByClassName: ${divEleByClassName[0]}`);
    console.log(`divEleByClassName: ${divEleByClassName[1]}`);

    document.getElementsByTagName('div');
    */

    // var divEle = document.querySelector('#wrap');
    // console.log(`divEle: ${divEle}`);

    // var colorPicker = document.querySelector('#colorPicker');
    // console.log(`colorPicker: ${colorPicker}`);

    // var colorPickerValue = colorPicker.value;
    // console.log(`colorPickerValue: ${colorPickerValue}`);
    // document.querySelector('#colorText');

    // var pEle = document.querySelector('#colorText');
    // console.log(`pEle: ${pEle}`);
    // console.log(`pEle textContent: ${pEle.textContent}`);

    // pEle.textContent = colorPickerValue;

//     var inputEle = document.querySelector('#colorPicker');
//     console.log(`inputEle: ${inputEle}`);
    
//     var inputEleValue = inputEle.value;
//     console.log(`inputEleValue: ${inputEleValue}`);

//     var pEle = document.querySelector('#colorText');
//     console.log(`pEle: ${pEle}`);

//     var pEleTextContent = pEle.textContent;
//     console.log(`pEleTextContent: ${pEleTextContent}`);

//     pEle.textContent = `${pEleTextContent}: ${inputEleValue}`;

//     inputEle.addEventListener('input', function() {
//         console.log('input value INPUTED!!');

//         pEle.textContent = `${pEleTextContent}: ${inputEle.value}`;

//         var bodyEle = document.querySelector('body');
//         bodyEle.style.backgroundColor = inputEle.value;

//     });


// });

// var divEle = document.querySelector('#wrap');
// console.log(`divEle: ${divEle}`); // 위의 코딩 없이 하려면 HTML script 맨 뒤에 defer 작성



// 다시 연습
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOCUMENT READY!!');

    var inputEle = document.querySelector('#colorPicker');
    var inputEleValue = inputEle.value;

    var colorTextEle = document.querySelector('#colorText');
    var colorTextEleText = colorTextEle.textContent;

    colorTextEle.textContent = `${colorTextEleText}: ${inputEleValue}`;

    inputEle.addEventListener('input', function(e) {

        console.log(e.target);

        var changedColorValue = e.target.value;
        colorTextEle.textContent = `${colorTextEleText}: ${changedColorValue}`;

        var bodyEle = document.querySelector('body');
        bodyEle.style.backgroundColor = changedColorValue;

    })

});

