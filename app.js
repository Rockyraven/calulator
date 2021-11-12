const Input = document.querySelector('#input1');
const Num0 = document.querySelector('#num0');
const Num1 = document.querySelector('#num1');
const Num2 = document.querySelector('#num2');
const Num3 = document.querySelector('#num3');
const Num4 = document.querySelector('#num4');
const Num5 = document.querySelector('#num5');
const Num6 = document.querySelector('#num6');
const Num7 = document.querySelector('#num7');
const Num8 = document.querySelector('#num8');
const Num9 = document.querySelector('#num9');
const Divi = document.querySelector('#divi');
const Add = document.querySelector('#add');
const Mult = document.querySelector('#mult');
const Sub = document.querySelector('#sub');
const Equal = document.querySelector('#equal');
const Clear = document.querySelector('#clear');
const Output = document.querySelector('#para');
 
Num0.addEventListener("click",zeroNum);
function zeroNum(){
    // console.log("qjhj")
Input.value += Num0.innerText;
console.log(Input.value);

}

Num1.addEventListener("click",FirstNum);
function FirstNum(){
    // console.log("qjhj")
Input.value += Num1.innerText;
}

Num2.addEventListener("click",SecondNum);
function SecondNum(){
    // console.log("qjhj")
Input.value += Num2.innerText;

}
Num3.addEventListener("click",thirdNum);
function thirdNum(){
    // console.log("qjhj")
Input.value += Num3.innerText;

}
Num4.addEventListener("click",FourthNum);
function FourthNum(){
    // console.log("qjhj")
Input.value += Num4.innerText;

}
Num5.addEventListener("click",fiveNum);
function fiveNum(){
    // console.log("qjhj")
Input.value += Num5.innerText;

}
Num6.addEventListener("click",sixNum);
function sixNum(){
    // console.log("qjhj")
Input.value += Num6.innerText;

}
Num7.addEventListener("click",sevenNum);
function sevenNum(){

    // console.log("qjhj")
Input.value += Num7.innerText;

}
Num8.addEventListener("click",eightNum);
function eightNum(){

    // console.log("qjhj")
Input.value += Num8.innerText;

}
Num9.addEventListener("click",nineNum);
function nineNum(){

    // console.log("qjhj")
Input.value += Num9.innerText;

}

Mult.addEventListener("click",clickmult);
function clickmult(){
    // console.log("qjhj")
Input.value += Mult.innerText;
}

Divi.addEventListener("click",clickDivi);
function clickDivi(){
    // console.log("qjhj")
Input.value += Divi.innerText;
}

Add.addEventListener("click",clickAdd);
function clickAdd(){
    // console.log("qjhj")
Input.value += Add.innerText;
}

Sub.addEventListener("click",clickSub);
function clickSub(){
    // console.log("qjhj")
Input.value += Sub.innerText;
}
Equal.addEventListener("click", result)
function result(){
showMessage(eval(Input.value))
}
Clear.addEventListener("click",reset);
function reset(){
    // console.log("");
    Input.value = "";
}

function showMessage(msg){
    Output.innerText = msg;
}



 
 