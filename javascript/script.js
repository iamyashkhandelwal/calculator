console.log("Calculator");
var value = document.querySelector(".display");

// display.innerHTML = "Calculator";

(function(){
    value.innerHTML = 0;
}())

function display(val){

    if(value.innerHTML == 0){

        // value.innerHTML = "Zero"
        value.innerHTML = val;
        return;
    }
    value.innerHTML += val;
    // console.log(value.innerText.length);
}

function displaySign(sign){
    // value.innerHTML += x;
    let y = value.innerText[value.innerText.length - 1];
    
    
    // console.log(value.innerText[value.innerText.length - 1]);

    if(y == '+' || y == "-" || y == "*" || y == "/"){

        value.innerText = value.innerText.slice(0, value.innerText.length - 1); 
        value.innerHTML += sign;
        
    }
    else{
        value.innerHTML += sign;
    }
    
}

function plusMinus(){
    if(value.innerHTML == 0){
        value.innerHTML = '-';
    }
    
}

function clr(){
    value.innerHTML = 0;
}

function solve(){
    let x = value.innerHTML;
    let y = eval(x);
    value.innerHTML = y;
}

function del(){
    value.innerText = value.innerText.slice(0, value.innerText.length - 1); 
}
