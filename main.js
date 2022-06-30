// Declare Variables
let disp = document.getElementById("disp");

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const num7 = document.getElementById("num7");
const num8 = document.getElementById("num8");
const num9 = document.getElementById("num9");
const num0 = document.getElementById("num0");
const numP = document.getElementById("numP");

const numC = document.getElementById("clear");
const numA = document.getElementById("numA");
const numS = document.getElementById("numS");
const numM = document.getElementById("numM");
const numD = document.getElementById("numD");
const equal = document.getElementById("equals");

let history = document.getElementsByClassName('hist');
let clearHist = document.getElementById('clearHist');

count1 = '';
count2 = '';
const Total = [];
let i = 0;
let n = 0;
let h = 0;

// reset variables with "C"
numC.addEventListener("click", function () {
    disp.innerHTML = "0";
    count1 = '';
    count2 = '';
    const Total = [];
    i = 0;
    n = 0;
})

// Numbers define and Display
num1.addEventListener("click", function () {
    count1 += "1";
    disp.innerHTML = (count2 + count1);
    console.log(count2 + count1);
})
num2.addEventListener("click", function () {
    count1 += "2";
    disp.innerHTML = (count2 + count1);
})
num3.addEventListener("click", function () {
    count1 += "3";
    disp.innerHTML = (count2 + count1);
})
num4.addEventListener("click", function () {
    count1 += "4";
    disp.innerHTML = (count2 + count1);
})
num5.addEventListener("click", function () {
    count1 += "5";
    disp.innerHTML = (count2 + count1);
})
num6.addEventListener("click", function () {
    count1 += "6";
    disp.innerHTML = (count2 + count1);
})
num7.addEventListener("click", function () {
    count1 += "7";
    disp.innerHTML = (count2 + count1);
})
num8.addEventListener("click", function () {
    count1 += "8";
    disp.innerHTML = (count2 + count1);
})
num9.addEventListener("click", function () {
    count1 += "9";
    disp.innerHTML = (count2 + count1);
})
num0.addEventListener("click", function () {
    count1 += "0";
    disp.innerHTML = (count2 + count1);
})
numP.addEventListener("click", function () {
    count1 += ".";
    disp.innerHTML = (count2 + count1);
    console.log(count2 + count1);
})
// Plus
numA.addEventListener("click", function () {
    Total[i] = Number(count1);
    Total[i+1] = '+';
    count1 += " + ";
    count2 += count1;
    count1 = '';
    disp.innerHTML = count2;
    i += 2;
})
// Minus
numS.addEventListener("click", function () {
    Total[i] = Number(count1);
    Total[i+1] = '-';
    count1 += " - ";
    count2 += count1;
    count1 = '';
    disp.innerHTML = count2;
    i += 2;
})
// Multiply
numM.addEventListener("click", function () {
    Total[i] = Number(count1);
    Total[i+1] = '*';
    count1 += " * ";
    count2 += count1;
    count1 = '';
    disp.innerHTML = count2;
    i += 2;
})

// Divide
numD.addEventListener("click", function () {
    Total[i] = Number(count1);
    Total[i+1] = '/';
    count1 += " / ";
    count2 += count1;
    count1 = '';
    disp.innerHTML = count2;
    i += 2;
})

//Equal Button
equal.addEventListener("click", function () {
    Total[i] = Number(count1);
    for(n=0; n <= Total.length -1; n++){
        if(Total[n] == "/")
        {
            let x = Total[n-1]/Total[n+1];
            let y = n-1;
           Total.splice(y, 3, x);
           n = n-2;
        }    
    }
    for(n=0; n <= Total.length -1; n++){
        if(Total[n] == "*")
        {
            let x = Total[n-1]*Total[n+1];
            let y = n-1;
           Total.splice(y, 3, x);
           n = n-2;
        }    
    }
    for(n=0; n <= Total.length -1; n++){
        if(Total[n] == "-")
        {
            let x = Total[n-1]-Total[n+1];
            let y = n-1;
           Total.splice(y, 3, x);
           n = n-2;
        }    
    }
    for(n=0; n <= Total.length -1; n++){
        if(Total[n] == "+")
        {
            let x = Total[n-1]+Total[n+1];
            let y = n-1;
           Total.splice(y, 3, x);
           n = n-2;
        }    
    }
    
    // Add result on History
    disp.innerHTML = Total[0];
    if(h<10){
        history[h].innerHTML = Total[0];
        h++;
    }
})

// Reset History
clearHist.addEventListener("click", function () {
    for(h=0; h<10; h++)
    {        
        history[h].innerHTML = "";
    }
})