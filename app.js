
let gameSeq=[];
let userSeq=[];
let randbtn=["red","blue","yellow","green"];
let started=false;
let level=0;
let h=document.querySelector("h2");


document.addEventListener("keypress",function()
{
    if(started==false)
    {
        console.log("game started");
        started=true;

    levelup();
    }
})

function levelup()
{
    userSeq=[];
    level++;
    h.innerText=`Level ${level}`;
    let rand=Math.floor(Math.random()*3);
    let randColor=randbtn[rand];
    let btn=document.querySelector(`.${randColor}`);
    blink(btn,randColor);
    gameSeq.push(randColor);

    console.log(gameSeq);
}

function blink(btn,randColor)
{
    btn.style.backgroundColor="white"
    setTimeout(function() {
        btn.style.backgroundColor=randColor;
    },250);
}

function clickbtn()
{
    let btn=this;
    let bgc=this.style.backgroundColor;
    blink(btn,bgc);
    userSeq.push(bgc);
    check(userSeq.length-1);
}


let allbtns=document.querySelectorAll(".box");
for(btn of allbtns)
{
    btn.addEventListener("click",clickbtn);
}

function check(i)
{
   if(userSeq[i]===gameSeq[i]){
    if(userSeq.length==gameSeq.length)
            {
                setTimeout(levelup,1000);
            }}
        else
        {
            h.innerHTML=`Game Over.<br> Your score was ${level} <br> Press any key to restart.`;
            let bd=document.querySelector("body");
            bd.style.backgroundColor="red";
            setTimeout(function() {
                bd.style.backgroundColor="white";
            },150);
            reset();
        }
}

function reset()
{
    userSeq=[];
    gameSeq=[];
    level=0;
    started=false;
}

