let score=JSON.parse(localStorage.getItem('score'))||{
  wins:0,
  losses:0,
  ties:0
};

updateScore();

let isAutoPlaying=false;
let intervalId;
function autoPlay(){
  if(!isAutoPlaying){
    intervalId=setInterval(()=>{
    const player_move=computer_move();
    playgame(player_move);
  },1000);
  isAutoPlaying=true;
  }
  else{
    clearInterval(intervalId);
    isAutoPlaying=false; 
  }
}

function playgame(player_move){
const computerMove=computer_move();
if(player_move==='rock'){
  if(computerMove==='rock'){
    result='tie';
    }
  else if(computerMove==='paper'){
    result='you lost';
  }
  else if(computerMove==='scissors'){
    result='you won';
  }
}
else if(player_move==='paper'){
  if(computerMove==='rock'){
    result='you won';
    }
  else if(computerMove==='paper'){
    result='tie';
  }
  else if(computerMove==='scissors'){
    result='you lost';
  }
}
else if(player_move==='scissors'){
  if(computerMove==='rock'){
    result='you lost';
    }
  else if(computerMove==='paper'){
    result='you won';
  }
  else if(computerMove==='scissors'){
    result='tie';
  }
}

if(result==='you won'){
  score.wins++;
}
else if(result==='you lost'){
  score.losses++;
}
else if(result==='tie'){
  score.ties++;
}

localStorage.setItem('score',JSON.stringify(score));

document.querySelector('.js-result').innerHTML=result
document.querySelector('.js-moves').innerHTML=`you <img class=move-icon src="${player_move}-emoji.png"> <img class=move-icon src="${computerMove}-emoji.png">computer`;

updateScore();


}

function updateScore(){
document.querySelector('.js-score').innerHTML=(`wins:${score.wins} losses:${score.losses} ties:${score.ties}`);
}
function computer_move(){
let computerMove=Math.random();
if(computerMove>=0&&computerMove<1/3){
  computerMove='rock';
}
else if(computerMove>=1/3&&computerMove<2/3){
  computerMove='paper';
}
else if(computerMove>=2/3&&computerMove<1){
  computerMove='scissors';
}
return computerMove;
}
let result='';