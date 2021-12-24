const result = document.querySelector('p');
const num = document.getElementById("num");
const btnSub = document.getElementById("submit");

btnSub.addEventListener("click", () => {
    let number = Number(num.value);
    let temp = ""
    if(!isNaN(number) && 4 <= number <= 20){
        for(let i = 0; i <= number; i++){
            if(i%2==0){
                temp += i + " ";
            }
        }
    }
    else{
        alert("Nhap lai!");
    }
    result.innerHTML= `${temp}`;
})