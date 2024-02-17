// function play() {

// const homeScreen=document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');

//     const playGroundSection=document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
//     // console.log(playGroundSection.classList)
// }
function getElementTextById(elmentId){
  const elment=document.getElementById('current-alphabet');
  const value=elment.innerText;
  return value;
}
function handleKeyUpEvent(event) {
  const playerPressed = event.key;
  console.log(playerPressed);
  if(playerPressed==='Escape'){
    gameOver();
  }
  //console.log('Player Pressed',playerPressed);
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  //console.log(playerPressed, expectedAlphabet);
  if (playerPressed === expectedAlphabet) {
    console.log("You Get a Point", expectedAlphabet);

    const currentScore=getTextElementById('current-score');
    const updatedScore=currentScore+1;
    setTextElementById('current-score',updatedScore);
    // update score
    // 1 show current score.
   /* const currentScoreElement = document.getElementById("current-score");
    const currentScore = currentScoreElement.innerText;
    const currentScoreInt = parseInt(currentScore);
    console.log(currentScoreInt);
    // 2 increase score by 1
    const newScore=currentScoreInt+1;
     // 3 show the update score.
      currentScoreElement.innerText=newScore;*/
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    console.log("You Loss the Game");
    const currentLife=getTextElementById('current-life');
    const updatedLife=currentLife-1;
    setTextElementById('current-life',updatedLife);
    if(updatedLife===0){
     gameOver();
    }
   /* const currentLifeElement=document.getElementById('current-life');
    const currentLife=currentLifeElement.innerText;
    const currentLifeInt=parseInt(currentLife);
    const newLife=currentLifeInt-1;
    currentLifeElement.innerText=newLife*/
  }
}
document.addEventListener("keyup", handleKeyUpEvent);
function continueGame() {
  const letter = randomAlphabet();
  console.log("your random alphabet :", letter);
  const currentAlphabet = document.getElementById("current-alphabet");
  currentAlphabet.innerText = letter;
  setBackgroundColorById(letter);
}
function play() {
  hideElementById("home-screen");
  hideElementById('final-score');
  showElementById("play-ground");
  setTextElementById('current-life',5);
  setTextElementById('current-score',0);
  continueGame();
}
function gameOver(){
hideElementById('play-ground');
showElementById('final-score');
const lastScore=getTextElementById('current-score');
console.log(lastScore)
setTextElementById('last-score',lastScore);
const currentAlphabet=getElementTextById('current-alphabet');
removeBackgroundColorById(currentAlphabet);
}
