function runTime(){
    let clock = document.getElementById("clock");
    let date = new Date;
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    clock.innerHTML = `${hours} : ${minutes} : ${seconds}`;
}

setInterval(runTime, 1000);