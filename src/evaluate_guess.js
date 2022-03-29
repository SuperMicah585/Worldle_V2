export const evaluateGuess = async (code, guesses, guessCounter) => {
  let feedback = "";
  let string_guess =""
  let codeCopy = [];
  let guessesCopy = [];
let stringCopy =""


for (let y = 0; y <= 4; y++) {
  string_guess=string_guess+guesses[y];
}


//copies
for (let y = 0; y <= 4; y++) {
  codeCopy[y] =code[y];
}

for (let y = 0; y <= 4; y++) {
  guessesCopy[y] =guesses[y];
}
//----created copy of arays

for (let y = 0; y <= 4; y++) {
  if(codeCopy[y] === guessesCopy[y]){
    codeCopy[y] = null;
    guessesCopy[y] ='!';   //order matters so have to set code to null and guesses to green
  }
}

for (let y = 0; y <= 4; y++) {
    for (let i = 0; i <= 4; i++) {
      if (guessesCopy[i] === codeCopy[y]){
        codeCopy[y] = null;          //similiar to above, but indexes dont have to match + greens have already been filtered
        guessesCopy[i] ='@';
      }
    }
  }




console.log(guessesCopy);
console.log(codeCopy);



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
    if (guessesCopy[i] === '!') {
      feedback += "!";
    }
    else if (guessesCopy[i] === "@") { //error becayse a is undefined
      feedback += "@";
    }
    else{
      feedback += "-";
    }
  }

//checks to see if they guessed the right word
if (feedback === '!!!!!'){
  feedback = "You Win!"

}
else if(guessCounter===7){
  feedback = "You Lose!"
}

}


  return feedback;





};
