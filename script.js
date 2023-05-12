

let timeleft = 10;
let downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("timer").innerHTML = "HAPPY INDEPENDENCE DAY";
  } else {
    document.getElementById("timer").innerHTML = timeleft ;
  }
  timeleft --;
}, 1000);