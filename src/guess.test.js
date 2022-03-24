//npm test -- guess.test.js

import React from "react";
import { render } from "@testing-library/react";

import { evaluate_Guess, evaluateGuess } from "./evaluate_guess";

test("returns 'You Win!' when the last guess is equal to the word & counter is 5 or less", () => {
  const code = ['R','E', 'A', 'C','T'];
  const guesses = ['R','E', 'A', 'C','T']
  const guessCounter = 1
  expect(evaluateGuess(code, guesses, guessCounter)).toBe("You Win!");
});


test("returns 'Not a Word' when the guess is not in the word bank. Does not add a guess to the counter", () => {
  const code = ['R','E', 'A', 'C','T'];
  const guesses = ['R','E', 'A', 'N','T']
  const guessCounter = 3;
  expect(evaluateGuess(code, guesses, guessCounter)).toBe("Not a Word");
});

test("returns 'You Lose' when the guess is not equal to the word and the counter is 5", () => {
  const code = ['R','E', 'A', 'C','T'];
  const guesses = ['S','H', 'A', 'L','E']
  const guessCounter = 5;
  expect(evaluateGuess(code, guesses, guessCounter)).toBe("You Lose!");
});

test("returns 'You Lose' when the guess is not equal to the word and the counter is 5", () => {
  const code = ['R','E', 'A', 'C','T'];
  const guesses = ['S','H', 'A', 'L','E']
  const guessCounter = 5;
  expect(evaluateGuess(code, guesses, guessCounter)).toBe("You Lose!");
});

test("returns the corresponding highlighted icon when the correct letter has been placed in the wrong spot.", () => {
  const code = ['R','E', 'A', 'C','T'];
  const guesses = ['S','H', 'A', 'L','E']
  const guessCounter = 4;
  expect(evaluateGuess(code, guesses, guessCounter)).toBe("--X-O");
  });

test("returns the corresponding highlighted icon when the correct letter has been placed in the wrong spot.", () => {
  const code = ['R','E', 'A', 'C','T'];
  const guesses = ['L','O', 'S', 'E','R']
  const guessCounter = 4;
  expect(evaluateGuess(code, guesses, guessCounter)).toBe("---OO");
  });

test("returns the corresponding highlighted icon when the correct letter has been placed in the wrong spot.", () => {
  const code = ['R','E', 'A', 'C','T'];
  const guesses = ['R','R', 'R', 'R','R']
  const guessCounter = 4;
  expect(evaluateGuess(code, guesses, guessCounter)).toBe("XOOOO");
  });


test("returns the corresponding highlighted icon when the correct letter has been placed in the wrong spot.", () => {
  const code = ['R','C', 'A', 'C','T'];
  const guesses = ['S','C', 'A', 'L','E']
  const guessCounter = 4;
  expect(evaluateGuess(code, guesses, guessCounter)).toBe("-XX--");
  });



                                                        //X is correct. O is correct letter wrong spot.
                                                        //Evaluates each index in the array one at a time so I don't think there too much that could go wrong


//Other tests
//If letter is not within the word. After the guess the corresponding button does not have functionality.
//All buttons are functional(letter,backspace,enter)
//Enter will only work if there are 5 letters that have been entered
//Backspace will only will if there is >0 letters entered
//Will not add a letter if word.length is 5 letters long
