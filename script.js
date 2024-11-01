var time=60
var score=0
var hit
function makebubble() {
    var clutter=""
    for (let i = 0; i <126; i++) {
        rn=Math.floor(Math.random()*10)
        clutter+=`<div id="box2">${rn}</div>` 
    }
    document.querySelector("#pbtm").innerHTML=clutter
}
function newhit() {
    hit=Math.floor(Math.random()*10)
    document.querySelector(".hitval").textContent=hit
}
function timer() {
    
        var inttimer=setInterval(() => {
            if(time>0){
                time--
                document.querySelector(".time").textContent=time
            }
            else{
                clearInterval(inttimer)
                document.querySelector("#pbtm").innerHTML="Game Over"
            }
        }, 1000);
    }
function increasescore() {
    score+=10
    document.querySelector(".score").textContent=score

}   

document.querySelector("#pbtm").addEventListener("click",(dets)=>{
           clicked=Number(dets.target.textContent)
           if(clicked===hit){
              increasescore()
              makebubble()
              newhit()
           }
})

makebubble()
newhit()
timer()