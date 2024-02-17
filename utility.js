function hideElementById(elmentId) {
  const elment = document.getElementById(elmentId);
  elment.classList.add("hidden");
}
function showElementById(elmentId) {
  const elment = document.getElementById(elmentId);
  elment.classList.remove("hidden");
}
  function setBackgroundColorById(elmentId) {
    const elment = document.getElementById(elmentId);
    elment.classList.add("bg-orange-400");
  }
  function getTextElementById(elmentId){
    const elment=document.getElementById(elmentId);
    const elmentValueText=elment.innerText;
    const elmentValueInt=parseInt(elmentValueText);
    return elmentValueInt;
  }
  function setTextElementById(elmentId,elmentValueInt){
    const elment=document.getElementById(elmentId);
    elment.innerText=elmentValueInt;

  }
  function removeBackgroundColorById(elmentId) {
    const elment=document.getElementById(elmentId);
    elment.classList.remove('bg-orange-400')
  }

function randomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabet = alphabetString.split("");
  //console.log(alphabet)
  const index = Math.round(Math.random() * 25);
  const letter = alphabet[index];
  // console.log(letter,index);
  return letter;
}
