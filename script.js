let time = 59
let score = 0
let targetHit
let newval
let leveltime = 3
let levelStarted = false;

let box2 =document.getElementById("box2")
let help = document.getElementById("help")
let restart  = document.getElementById("restart")

restart.addEventListener("click",()=>{
    location.reload();
})


help.addEventListener("click",()=>{
    document.body.innerHTML = `<div  id = "helpMessage" >
    <p>1.click on circle which has same value as in hit box to get 5 score</p>
    <p>2.The value both in circle and hit box changes after 3 seconds so be quick</p>
    <p>3.If clicked circle has different value then hit box, 5 scores will be reduced</p>
    <p>4.This game has 2 levels</p>
    <p>5.After your scores are greater than 30 you can start 2nd level</p>
    <p>6.2nd level only requires 20 scores</p>
    <p id = "special" >7.Total 50 scores are required to win this game</p>
    <p id = "special" >8.There is a special trick to win this game</p>
    <p>Dont worry,if you did't make it first time you can replay this game till your laptop is on😊</p>
    <p id = "play" >play the game</p>
    </div>`
    let relaod = document.getElementById("play")
relaod.addEventListener("click",()=>{
    location.reload();
})
})



function createBoxes() {
    for (let i = 0; i < 133; i++) {
        let rn = Number(Math.floor(Math.random()*10)+1)
        box2.innerHTML+=`<div  class = "boxes " >${rn}</div>`
}}
function createBoxes1() {
    box2.style.gap = "2px"
    for (let i = 0; i < 185; i++) {
        let rn = Number(Math.floor(Math.random()*15)+1)
        box2.innerHTML+=`<div  class = "boxes1 " >${rn}</div>`
}}
setInterval(() => {
    let boxes = document.getElementsByClassName("boxes");
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].classList.add("animate__animated", "animate__wobble");
        setTimeout(() => {
            boxes[i].classList.remove("animate__animated", "animate__wobble");
        }, 1000); 
    }
    resetValues()
    target()
}, 2000);

setInterval(() => {
    let boxes = document.getElementsByClassName("boxes1");
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].classList.add("animate__animated", "animate__wobble");
        setTimeout(() => {
            boxes[i].classList.remove("animate__animated", "animate__wobble");
        }, 1000); 
    }
    resetValues1()
    target()
}, 2000);


function target() {
    targetHit = Math.floor(Math.random()*10)+1
    document.getElementById("target").textContent = targetHit
}
function timer() {
    setInterval(() => {
       if(time==0){
        document.getElementById("box2").innerHTML =`<p   class="animate__animated animate__bounce"     id="message" >GAME OVER</p>` 
        document.getElementById("timer").textContent = 0
       } 
       else{
        document.getElementById("timer").textContent = time
        time--
       }
    }, 1000);
}
function scores() {
    score+=5
    document.getElementById("score").textContent = score 
    if (score > 30 && !levelStarted ){
        levelStarted = true;
    const newlevel =   setInterval(() => {
         startnewLevel(newlevel)
       }, 2000);
    }
    if(score == 50){
        document.body.innerHTML = `<div id = "finalMessage"  >Nothing can stop you champ ! great</div>`
    }
    function startnewLevel(newlevel) {
     box2.innerHTML =`<p   class="animate__animated animate__bounce"     id="message1" > <span>Great you are very close Level 2 starting in</span><span id="timeremaining" >${leveltime}</span></p>`
         leveltime--

         if(leveltime === -2){
            clearInterval(newlevel)
            let message1 = document.getElementById("message1")
            message1.remove()
            createBoxes1()
     let level2 = document.getElementById("level")
    level2.textContent = score > 30 ? `Level 2` : `Level 1`
    level2.style.backgroundColor =score > 30 ? "red" : "rgb(140, 240, 127)"
    let box2 = document.getElementById("box2")
    box2.style.backgroundColor =score > 30 ? "red" : "rgb(140, 240, 127)"
  }

    }
  
}
function scoresDecrease() {
    score-=5
    document.getElementById("score").textContent = score 
}
function resetValues() {
    for (let i = 0; i < 133; i++) {
        newval=  document.getElementsByClassName("boxes")
        let rn = Math.floor(Math.random()*10)+1
        newval[i].textContent = `${rn}`  
    }
}
function resetValues1() {
    for (let i = 0; i < 133; i++) {
        newval=  document.getElementsByClassName("boxes1")
        let rn = Math.floor(Math.random()*15)+1
        newval[i].textContent = `${rn}`  
    }
}
function matchTarget() {
    document.getElementById("box2").addEventListener("click",(event)=>{
            var match= Number(event.target.textContent)
            console.log(match)
            if(match==targetHit){
                scores()
                target()
                resetValues()
            }
            else if(match!==targetHit){
                scoresDecrease()
            }
    })
}
createBoxes()
target()
timer()
matchTarget()


