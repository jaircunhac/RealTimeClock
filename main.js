const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const seconds = document.getElementById('seconds');

const clock = setInterval(function time(){
    let auxTime = new Date();
    
    let hr = auxTime.getHours();
    let min = auxTime.getMinutes();
    let s = auxTime.getSeconds();

    if(hr < 10){
        hr = '0' + hr;
    }

    if(min < 10){
        min = '0' + min;
    }

    if(s < 10){
        s = '0' + s;
    }

    hour.textContent = hr;
    minute.textContent = min;
    seconds.textContent = s;
})