var min = document.getElementById("min")
var sec = document.getElementById("sec")
var milisec = document.getElementById("milisec")


var minute = 0
var seconds = 0
var milisecon = 0
var interval;

function startmilisec(){
    
    milisec.innerHTML = milisecon
    milisecon++
    if(milisecon >=100){
        seconds++
        sec.innerHTML = seconds
        milisecon = 0
    }else if(seconds >=60){
        minute++
        min.innerHTML=minute
        seconds = 0
    }
}

function start(){
    interval = setInterval(startmilisec , 10)
    
}

function stoptheWatch(){

    clearInterval(interval)

}