const input = document.getElementById("num");
const result = document.getElementById("result");
const btnSub = document.getElementById("submit");

btnSub.addEventListener("click", () => {
    let kq = '';
    for(let i=1; i<=Number(input.value); i++){
        kq += 1;
        result.innerHTML += `<br> ${kq}`;
    }
})

