export const evaluateGuess = async (code, guesses, guessCounter) => {
  let feedback = "";
  let string_guess =""



for (let y = 0; y <= 4; y++) {
  string_guess=string_guess+guesses[y];
}
/*
const axios = require('axios');

async function makeGetRequest() {

  let res = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/'+string_guess);

  let data = await res.data;
  return data;
}

console.log(makeGetRequest());
*/











/*
function word_check(x){
    axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/'+x)
    .then(response => {
   console.log((response.data)[0]['word']);
    })
    .catch(error => {
      console.log(error);
    });
}
(word_check(string_guess));
*/
//If character is X, then check whole word for any other of the same character. if none then turn
//if character is ), then check whole word for any other Green. if none return yellow, if green and count<2, then
//If no other X then feedback will need to not mark yellow for repeated characters in the wrong spot
//evaluates word
//need a green counter for each letter
//repition counter for code
var rep_counter = {};

for (let y = 0; y <= 4; y++) { //how many green for each letter
  var counter =0;
    if (guesses[y] === code[y]){
      if(guesses[y] in rep_counter){
        rep_counter[guesses[y]] = (rep_counter[guesses[y]])+1;

      }
      else{
        counter++;
    rep_counter[guesses[y]] = counter;

  }

    }
  }

console.log(rep_counter);

var rep_counters = {};     //total number of each letter

for (let y = 0; y <= 4; y++) {
  var counter =0;
  for (let i = 0; i <= 4; i++) {
    if (code[i] === code[y]){
      counter ++;

    }
  }
rep_counters[code[y]] = counter;

}

const is_word = fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+string_guess) //1
  .then((response) => response.json()) //2
  .then((word) => {
    return word[0]; //3
  });



  const a = await is_word;
  if (a === undefined){


      feedback = "this is not a word"

  }
  else{


  for (let i = 0; i <= 4; i++) {
    if (code[i] === guesses[i]) {
      feedback += "X";
    }
    else if (code.includes(guesses[i]) && ((rep_counter[guesses[i]]) ===undefined || (rep_counter[guesses[i]] < rep_counters[guesses[i]]))) { //error becayse a is undefined
      feedback += "O";
    }
    else{
      feedback += "-";
    }
  }

//checks to see if they guessed the right word
if (feedback === 'XXXXX'){
  feedback = "You Win!"

}
else if(guessCounter===7){
  feedback = "You Lose!"
}

}


  return feedback;





};
