const audio=document.getElementById("musica");

const button=document.getElementById("playButton");

button.onclick=()=>{

audio.play();

button.style.display="none";

confetes();

}

function particulas(){

let p=document.createElement("div");

p.className="spark";

p.style.left=Math.random()*100+"vw";

p.style.animationDuration=(4+Math.random()*5)+"s";

p.style.opacity=Math.random();

document.getElementById("particles").appendChild(p);

setTimeout(()=>p.remove(),9000);

}

setInterval(particulas,150);

function confetes(){

for(let i=0;i<180;i++){

let c=document.createElement("div");

c.className="spark";

c.style.left=Math.random()*100+"vw";

c.style.top="-20px";

c.style.background=["#ff0","#09f","#f44","#0f0","#f0f"][Math.floor(Math.random()*5)];

c.style.width="10px";

c.style.height="10px";

c.style.animationDuration=(2+Math.random()*3)+"s";

document.getElementById("particles").appendChild(c);

setTimeout(()=>c.remove(),5000);

}

}