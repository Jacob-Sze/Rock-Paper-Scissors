
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
let computerinput = "";
let playerinput = "";
let randomNumber;
let rockClicked = false;
let paperClicked = false;
let scissorsClicked = false;
const removal = document.getElementById('stuff');
const hide = document.getElementById("btn");
let playerpoints;
let computerpoints;
JSON.parse(window.localStorage.getItem('playerpoints'));
JSON.parse(window.localStorage.getItem('computerpoints'));
playerpoints = "" + playerpoints;
computerpoints = "" + computerpoints;
hide.style.visibility = 'hidden';
answer.style.visibility = 'hidden';

rock.addEventListener('click', function handleClick() {
  rockClicked = true;
  playerinput = rock;
  removal.remove();
  answer.style.visibility = 'visible';
  hide.style.visibility = 'visible';

  playGame();
});
paper.addEventListener('click', function handleClick() {
  paperClicked = true;
  playerinput = paper;
  removal.remove();
  answer.style.visibility = 'visible';
  hide.style.visibility = 'visible';

  playGame();
});
scissors.addEventListener('click', function handleClick() {
  scissorsClicked = true;
  playerinput = scissors;
  removal.remove();
  answer.style.visibility = 'visible';
  hide.style.visibility = 'visible';
  playGame();
});
function playGame(){
  if(rockClicked){
    document.getElementById("userinput").src="Screenshot 2022-04-07 114927.png";
    randomNumber = Math.floor(Math.random()*3);
    switch(randomNumber){
      case 0:
      document.getElementById("computerinput").src="https://www.publicdomainpictures.net/pictures/200000/velka/scissors-silhouette-1479486040jCd.jpg";
      computerinput = scissors;
      break;
      case 1:
      document.getElementById("computerinput").src="Screenshot 2022-04-07 114914.png";
      computerinput = paper;
      break;
      case 2:
      document.getElementById("computerinput").src="Screenshot 2022-04-07 114927.png";
      computerinput = rock;
      break;
    }
  }else if(paperClicked){
    document.getElementById("userinput").src="Screenshot 2022-04-07 114914.png";
    randomNumber = Math.floor(Math.random()*3);
    switch(randomNumber){
      case 0:
      document.getElementById("computerinput").src="https://www.publicdomainpictures.net/pictures/200000/velka/scissors-silhouette-1479486040jCd.jpg";
      computerinput = scissors;
      break;
      case 1:
      document.getElementById("computerinput").src="Screenshot 2022-04-07 114914.png";
      computerinput = paper;
      break;
      case 2:
      document.getElementById("computerinput").src="Screenshot 2022-04-07 114927.png";
      computerinput = rock;
      break;
    }
  }else if(scissorsClicked){
    document.getElementById("userinput").src="https://www.publicdomainpictures.net/pictures/200000/velka/scissors-silhouette-1479486040jCd.jpg";
    randomNumber = Math.floor(Math.random()*3);
    switch(randomNumber){
      case 0:
      document.getElementById("computerinput").src="https://www.publicdomainpictures.net/pictures/200000/velka/scissors-silhouette-1479486040jCd.jpg";
      computerinput = scissors;
      break;
      case 1:
      document.getElementById("computerinput").src="Screenshot 2022-04-07 114914.png";
      computerinput = paper;
      break;
      case 2:
      document.getElementById("computerinput").src="Screenshot 2022-04-07 114927.png";
      computerinput = rock;
      break;
    }
  }
  if(computerinput === playerinput){
    document.getElementById("result").innerHTML="You tied";
  }else{
    if(computerinput === rock &&  playerinput === paper){
      document.getElementById("result").innerHTML="You win";
      playerpoints = 1 + playercookie;
      playerpoints = "" + playerpoints;
      window.localStorage.setItem(playerpoints);
      document.getElementById("p-points").innerHTML = playerpoints;
    }else if(computerinput === paper &&  playerinput === rock){
      document.getElementById("result").innerHTML="You lose";
      computerpoints = 1 + computercookie;
      computerpoints = "" + computerpoints;
      window.localStorage.setItem(computerpoints);
      document.getElementById("c-points").innerHTML = computerpoints;
    }else if(computerinput === rock &&  playerinput === scissors){
      document.getElementById("result").innerHTML="You lose";
      computerpoints = 1 + computercookie;
      computerpoints = "" + computerpoints;
      window.localStorage.setItem(computerpoints);
      document.getElementById("c-points").innerHTML = computerpoints;
    }else if(computerinput === scissors &&  playerinput === rock){
      document.getElementById("result").innerHTML="You win";
      playerpoints = 1 + playercookie;
      playerpoints = "" + playerpoints;
      window.localStorage.setItem(playerpoints);
      document.getElementById("p-points").innerHTML = playerpoints;
    }else if(computerinput === paper &&  playerinput === scissors){
      document.getElementById("result").innerHTML="You win";
      playerpoints = 1 + playercookie;
      playerpoints = "" + playerpoints;
      window.localStorage.setItem(playerpoints);
      document.getElementById("p-points").innerHTML = playerpoints;
    }else if(computerinput === scissors &&  playerinput === paper){
      document.getElementById("result").innerHTML="You lose";
      computerpoints = 1 + computercookie;
      computerpoints = "" + computerpoints;
      window.localStorage.setItem(computerpoints);
      document.getElementById("c-points").innerHTML = computerpoints;
    }
  }
}
