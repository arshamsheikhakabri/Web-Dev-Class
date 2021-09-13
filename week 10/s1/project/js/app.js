const timer = document.getElementById('timer')
const start = document.getElementById('start')
const reset = document.getElementById('reset')
const stop = document.getElementById('stop')
let milsecond = 0;
let minute = 0
let second = 0
let hour = 0

let interval;
function gotimer(){
    milsecond++
    if(milsecond == 100){
        second++;
        

    }
    if(second == 60){
    minute++
}
    if (minute == 60){
    hour++
}
timer.innerHTML = minute + second + ':' + '0' + milsecond



}
start.addEventListener('click',function(){
    interval = setInterval(gotimer, 10)
})
stop.addEventListener('click',function(){
    clearInterval(interval)
})
reset.addEventListener('click',function(){
    clearInterval(interval)
    time = 0
    timer.innerHTML = '00' + ':' + "00" 
})

