const add=(a,b)=>a+b;
const subtract=(a,b)=>a-b;
const product=(a,b)=>a*b;
const divide=(a,b)=>a/b;

const operate=(a,b,op)=>{
    if(op==='+')
        return add(a,b);
    else if(op==='-')
        return subtract(a,b);
    else if(op==='*')
        return product(a,b);
    else
    {
        if(b===0)
        {
            alert("Cannot divide by zero");
            return 0;
        }
        return divide(a,b);
    }
}

const resultDisplay=document.querySelector('.display');
function calculateAndDisplay()
{
    res=operate(Number(first),Number(last),operation);
    resultDisplay.textContent=res;
    //f=res;
    //l=0;
    first=String(res);
    last="";
}

let operation="";
let res=0;
//let f=0,l=0;
let first="",last="";
let opSelected=false;
resultDisplay.textContent=res;
const operators=document.querySelectorAll('.operator');



operators.forEach((oper)=>{
    oper.addEventListener('click',()=>{
        if(opSelected===true) //only single pair of numbers to be evaluated at a time,so we evaluate the 2 numbers entered thus far before taking further input
        {
            calculateAndDisplay();
        }
        operation=oper.value;
        resultDisplay.textContent+=operation;
        opSelected=true;
    });
});

const numbers=document.querySelectorAll('.number');
numbers.forEach((num)=>{
    num.addEventListener('click',()=>{
        if(opSelected===false)
        {
            //f=(f*10)+Number(num.value);
            //resultDisplay.textContent=f;
            first+=num.value;
            resultDisplay.textContent=first;
        }
        else
        {
            //l=(l*10)+Number(num.value);
            //resultDisplay.textContent=l;
            last+=num.value;
            resultDisplay.textContent=last;
        }    
    });
});

const equals=document.querySelector('#equal');
equals.addEventListener('click',function(){
    calculateAndDisplay();
    opSelected=false;
});

const clear=document.querySelector('.clear');
clear.addEventListener('click',()=>{
    first="";
    last="";
    res=0;
    resultDisplay.textContent=0;
})