const clk = document.querySelector("#clock");



// setInterval(function(){
//     let date = new Date();
//     // console.log(date.toLocaleTimeString());
//     clk.innerHTML= date.toLocaleTimeString();
// }, 1000);



setInterval(function(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let format = "AM";
    if(hours>12){
        format = "PM";
        hours = hours - 12;
    }
    if(hours == 0){
        hours = 12;
    }
    if(hours<10){
        hours = "0" + hours;
    }
    if(minutes<10){
        minutes = "0" + minutes;
    }
    if(seconds<10){
        seconds = "0" + seconds;
    }
    clk.innerHTML = `${hours}:${minutes}:${seconds} ${format}`;
},1000);



