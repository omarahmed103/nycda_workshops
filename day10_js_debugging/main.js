let gameOver = false;
let computerChoices = ["rock", "paper", "scissors"];
//console.log( computerChoices)

function randomFrom(array){
  return array[(Math.floor(Math.random()*array.length)) ];
}

console.log("Computer input " + randomFrom(computerChoices))


function checkInput(input, computerChoices){
  if (input === "quit"){
    return true;
  }
  
  let computerChoice = randomFrom(computerChoices);
  
  if(computerChoice === "rock" && input === "scissors"){
    alert("Computer wins!");
    return true;
  } else if (computerChoice === "scissors" && input === "paper"){
      alert("Computer wins!");
      return true;
  } else if (computerChoice === "paper" && input === "rock"){
      alert("Computer wins!");
      return true;
  }
  else if (computerChoice === "rock" && input === "rock"){
      alert("Game is draw");
      return true;
  }
  else{
  alert("You win");
  return false
  }
}


function start(gameOver, computerChoices) {
  while (!gameOver){
    let playerInput = '';
    playerInput = prompt("Hi! Enter rock/paper/scissors to play, or quit to stop playing.");
    console.log("players input " + playerInput)
    gameOver = checkInput(playerInput, computerChoices);
    break;
  } 
}



start(gameOver, computerChoices)  




/**
Javascript features and functions in use: 
- FOR OF Loop:    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
- FOR IN Loop:    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
- CHARCODEAT:     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
- FROMCHARCODE:   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
- ARRAY JOIN:     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
**/

function encode(word) {
  
  //somewhere to setore the converted caracters
  let result = [];
  //next we loop over each character in the string.
for(var position in word)
{
  //console.log(position)
  
  //and save the charcode to the array
  result.push(word.charCodeAt(position));
  
}
console.log("This is from encode before join " + result)
// and return that list of codes, separated by colon 
return result.join(':');
}



function decode(hash) {
  //split the code by semicolons!
  let array = hash.split(':');
  console.log("This is from decode function " + array)
// again somewhere to put our codes 
let result = [];
//loop over the codes
  for(var code of array){
  //change the ode back to the string character equivalent
  result.push(String.fromCharCode(code));
  }
  
  console.log(result)
  return result.join('');
}


let message = "I'm trying to send this secret message.";
let encodedMessage = encode(message);
let decodedMessage = decode(encodedMessage);


console.log(message);
console.log(encodedMessage);
console.log(decodedMessage);