import {add,sub,multi,devide} from "./calculate.js";

const numberA = document.getElementById("number1");
const numberB = document.getElementById("number2")  ;
const result = document.querySelector('p')
const btnAdd = document.getElementById("add");
const btnSub = document.getElementById("sub");
const btnMulti = document.getElementById("multi");
const btnDivide = document.getElementById("divide");

btnAdd.addEventListener("click", () => { 
    if(isNaN(Number(numberA.value)) || isNaN(Number(numberB.value))){
        alert("Nhap lai!");
    }
    else{
        result.innerHTML = `Kết quả: ${add(Number(numberA.value),Number(numberB.value))}`;
    }   
})

btnSub.addEventListener("click", () => { 
    if(isNaN(Number(numberA.value)) || isNaN(Number(numberB.value))){
        alert("Nhap lai!");
    }
    else{
        result.innerHTML = `Kết quả: ${sub(Number(numberA.value),Number(numberB.value))}`;
    }   
})

btnMulti.addEventListener("click", () => { 
    if(isNaN(Number(numberA.value)) || isNaN(Number(numberB.value))){
        alert("Nhap lai!");
    }
    else{
        result.innerHTML = `Kết quả: ${multi(Number(numberA.value),Number(numberB.value))}`;
    }   
})

btnDivide.addEventListener("click", () => { 
    if(isNaN(Number(numberA.value)) || isNaN(Number(numberB.value))){
        alert("Nhap lai!");
    }
    else{
        result.innerHTML = `Kết quả: ${devide(Number(numberA.value),Number(numberB.value))}`;
    }   
})