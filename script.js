//Global Variables
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1100; //how long to hold each clue's light/sound
var mistakes;
var interval;
var counter;

//Global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const waitingTime = clueHoldTime/10
const timer = document.getElementById("timer"); 

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}
function playClueSequence(){
  guessCounter = 0;
  clueHoldTime = clueHoldTime - waitingTime;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far   
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  setTimeout(timerOn, delay);
}
function getRandom(lower, upper) {
  return Math.floor(Math.random() * (upper - lower) + lower);
}
function makeRandomPattern(){
    for (let i = 0; i<9; i++) {
      pattern.push(getRandom(1,7));
    }
}
function timerOn(){
  document.getElementById("child2").style.visibility = 'visible';  
  counter = 5;
  timer.innerHTML = counter;
  interval = setInterval(timing, 1500);
}
function timing(){
  counter--;
  timer.innerHTML = counter;
  if(counter == -1 || mistakes == 3) {
    announce();
  } 
}
function timerOff(){
    clearInterval(interval);
    document.getElementById("child2").style.visibility = 'hidden';  
}
function startGame(){
  
    //initialize game variables 
    timerOff();
    progress = 0;
    clueHoldTime = 1100;
    gamePlaying = true;
    pattern = [];
    mistakes = 0;  
  //making random pattern
    
    makeRandomPattern();
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence(); 
}
function stopGame(){
    timerOff();
    progress = 0;
    gamePlaying = false;
    mistakes = 0;
    counter = 5;
    tonePlaying = false;
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");    
}
function lightButton(btn){
  document.getElementById("btn"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("btn"+btn).classList.remove("lit")
}
function loseGame(){
  stopGame();
  
}
function winGame(){
  clearInterval(interval);
  timer.innerHTML = 0; 
  alert("Game Over. Congrats! You won.");
  stopGame();
}
function announce(){
    //if time is up
    if (counter == -1){
      alert("Game Over. Time is up!");
      loseGame();
    } 
  
    else if (mistakes == 3){
      alert("Game Over. You lost.");
      loseGame();  

    } else {
      alert("Incorrect! You have " + (3 - mistakes) + " tries left");
      timerOff();
      timerOn();
    }  
}
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if(pattern[guessCounter] == btn){
    //if it's correct    
    if(guessCounter == progress){
      //if the turn is over
      if(progress == pattern.length - 1){     
        //if you're in the last position
        winGame();
      } else {
        //continue with the next sequence
        progress +=1;
        timerOff(); //restart the timer
        playClueSequence();
      }
      
    } else {
      //continue guessing
      guessCounter +=1;
    }
        
  } else {
      mistakes +=1;
      announce();
      guessCounter = 0; //restart count
    }
  }

// Sound Synthesis Functions

const freqMap = {
  1: 261.63,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 500.5,
  6: 600.9
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}


function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)