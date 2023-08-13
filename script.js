let timer=60;
let score = 0;
let hitrn = 0;

//start and restar









function increaseScore(){
    score +=10;
    document.querySelector("#scoreval").innerHTML = score;
}

function decreaseScore(){
    score -=2;
    document.querySelector("#scoreval").innerHTML = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").innerHTML = hitrn;
}

function makeBubble(){
    let clutter ="";
    for(var i=1;i<=150;i++){
        var k = Math.floor(Math.random()*10);
        clutter +=`<div class="bubble">${k}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    var timerintv = setInterval( function(){
       if(timer>0){
        timer--;
        document.querySelector("#timerValue").innerHTML = timer;
       }
       else{
        clearInterval(timerintv);
        document.querySelector("#pbtm").innerHTML = `<h1>Game over !! And your score is ${score}</h1>`;
        document.querySelector("#hitval").innerHTML = "0";
       }
        
    },1000);
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum ==hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
    else {
        decreaseScore();
    }
})

 getNewHit();
 makeBubble();
 runTimer();
document.getElementById('start').addEventListener("click", () =>{
    location.reload();
});


