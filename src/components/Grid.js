import React from "react";
//import { render } from "@testing-library/react";

import "./Grid.css";
import { evaluate_Guess, evaluateGuess } from "../evaluate_guess";
import Win from "./Win_Screen";
import Notword_popup from "./Notword_popup"
import Lose from "./you_lose"

//setShowingAlert(true)
var p = 0; // divide this number by 54 to know how many times the page has been rendered(including 1st load)
var unique_id = -1; //counter for boxes
var x=0; //who knows
var enter_tracker =1; //counter for number of guesses


const { useState, useEffect } = React;

class Square extends React.Component {

  constructor(props) {
  super(props);

}

    render() {
        {unique_id++}
      return (

        <button id={this.props.keys} style={{ backgroundColor: "black" }} //make this equal to a set of array values that dont change.
                                //need to be able to increment ID so each square is unique, but can't iterate because it is rendered everytime keyboard is pressed
          className="squared"
          onClick={() => console.log("this does nothing")}
        >
          {this.props.value}
        </button>
      );
    }

  }

  class KeySquare extends React.Component {

    constructor(props) {
    super(props);

  }



      render() {

        return (
          <button id = {this.props.value}   //in order to track the keyboard squares individually need to be able to identify them
          className="square"
           onClick={() => this.props.onClick()} //runs  through function handleclick(this.props.value) = onClick={() => this.handleClick(this.props.value)}
           >
          {this.props.value}

        </button>
        );
      }
    }



  class Grid extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        triggers: false,
        lose_trigger: false,
          squares: Array(30).fill(null),
        not_word: false,
      };





    }


      async handleClick(i) { //functionality for the Grid

      const squares = this.state.squares.slice();
      //console.log(this.state.squares.slice()) ;


      if(i==='Enter' && x/enter_tracker===5){
        enter_tracker++;
        const guess =  squares.slice(x-5,x);
        console.log(guess)
        const response_Feedback = await evaluateGuess(['R','E', 'A', 'C','T'], guess,enter_tracker )

        console.log(guess)
        if(response_Feedback === "You Win!"){

          this.setState({triggers:true})
          //set as true   m = true;


        }
        if (enter_tracker ===7){
          this.setState({lose_trigger:true})

        }

      else if(response_Feedback === "this is not a word"){
         enter_tracker--;
         this.setState({not_word:true})


       }
else{
      for (var z=0; z<response_Feedback.length; z++){
        var c = response_Feedback.charAt(z);
          //activate color for the button

        if (c === '-'){
          if ((document.getElementById(guess[z]).style.background) !== "rgb(221, 201, 141)"){
          document.getElementById(guess[z]).style.background="#606060";
        }

        }
        if (c === 'O'){

          // position in string *(1-enter_tracker)*290)+58) +(10*(1-enter_tracket))
          //every time rendered goes up by (*60). 0-60. 58-118
          // p keep trackf of renders.
          // 0 -58, 60 -118, 120 -178
          var calc_var_yellow = z + ((enter_tracker-2)*5)
          console.log(calc_var_yellow)

          //0/58, 5/29, 10/29, 15/29, 20/29
          if ((document.getElementById(guess[z]).style.background) !== "rgb(0, 208, 132)"){
          document.getElementById(guess[z]).style.background="#ddc98d";
        }
          document.getElementById(calc_var_yellow).style.background="#ddc98d"; //changes colors for keyboard + grid
        }
         if(c === 'X'){
          var calc_var_green = z + ((enter_tracker-2)*5)
          document.getElementById(guess[z]).style.background="#00d084";
          document.getElementById(calc_var_green).style.background="#00d084";

        }

      }
    }


          //make Squares[x-1] to squares[x-5] a string and run it through checks from evaluate_guess. == guess
          //Guess_counter == enter_tracker. Code == 5 letter word key. Guess == 5 letter word guess
          //If character is 0 and no other characters of that type in the word, then yellow should not show up on guess or any other guess.
        }

      else if(i==='delete' && (x%5 !== 0 || x/enter_tracker===5)){
        this.setState({not_word:false}) //temp fix to the problem of not being able to set the state back to false
        x--;
        squares[x] = null;
        this.setState({squares: squares});
  }



      else if (i !== 'delete'  && i !== 'Enter' && x/enter_tracker!==5){
        this.setState({not_word:false})
      squares[x] = i; //key get data from keyboard to show up on the GRID. Use squares[Grid index]
      this.setState({squares: squares});
      this.setState({color: "rgb(0, 191, 255)"})
      x++;

    }
    }

    renderSquare(i) { //adds functionality to keyboard
      p++;
      return(
      <KeySquare
      value={i}
      onClick={() => this.handleClick(i)}
      />

    );
    }

    renderSquared(i) { //adds button functionality to the Grid
      return (



        <Square
          value={this.state.squares[i]}
          keys = {i}

       //Creates the Grid
        //add functionality to squares so that they can change color
        />

      );
    }


    winfunction(){
      if((this.state.triggers) ===true){
    return(
      <Win
      trigger = {this.state.triggers}
      />
    )
    }

    }

    losefunction(){
      if((this.state.lose_trigger) ===true){
    return(
      <Lose
      lose_trigger = {this.state.lose_trigger}
      />
    )
    }

    }




    not_wordfunction(){
      if((this.state.not_word) ===true){
    return(

      <Notword_popup
      />

    )
    }
    else
    return(
      <div className="boxed">

    </div>);
    }


    render() {



      return (
        <div>


{this.winfunction()}
{this.not_wordfunction()}
{this.losefunction()}

        <div className = "Grids">
          <div className="board-row">
            {this.renderSquared(0)}
            {this.renderSquared(1)}
            {this.renderSquared(2)}
            {this.renderSquared(3)}
            {this.renderSquared(4)}
            </div>
            <div className="board-row">
            {this.renderSquared(5)}
            {this.renderSquared(6)}
            {this.renderSquared(7)}
            {this.renderSquared(8)}
            {this.renderSquared(9)}
          </div>
          <div className="board-row">
          {this.renderSquared(10)}
          {this.renderSquared(11)}
          {this.renderSquared(12)}
          {this.renderSquared(13)}
          {this.renderSquared(14)}
          </div>
          <div className="board-row">
          {this.renderSquared(15)}
          {this.renderSquared(16)}
          {this.renderSquared(17)}
          {this.renderSquared(18)}
          {this.renderSquared(19)}
            </div>
          <div className="board-row">
          {this.renderSquared(20)}
          {this.renderSquared(21)}
          {this.renderSquared(22)}
          {this.renderSquared(23)}
          {this.renderSquared(24)}
          </div>
                <div className="board-row">
          {this.renderSquared(25)}
          {this.renderSquared(26)}
          {this.renderSquared(27)}
          {this.renderSquared(28)}
          {this.renderSquared(29)}
          </div>
        </div>

        <div className = "keyboard">
          <div className="board-row">
            {this.renderSquare('Q')}
            {this.renderSquare('W')}
            {this.renderSquare('E')}
            {this.renderSquare('R')}
            {this.renderSquare('T')}
            {this.renderSquare('Y')}
            {this.renderSquare('U')}
            {this.renderSquare('I')}
            {this.renderSquare('O')}
            {this.renderSquare('P')}
          </div>
          <div className="board-row">
          {this.renderSquare('A')}
          {this.renderSquare('S')}
          {this.renderSquare('D')}
          {this.renderSquare('F')}
          {this.renderSquare('G')}
          {this.renderSquare('H')}
          {this.renderSquare('J')}
          {this.renderSquare('K')}
          {this.renderSquare('L')}
          </div>
          <div className="board-row">
          {this.renderSquare('Enter')}
          {this.renderSquare('Z')}
          {this.renderSquare('X')}
          {this.renderSquare('C')}
          {this.renderSquare('V')}
          {this.renderSquare('B')}
          {this.renderSquare('N')}
          {this.renderSquare('M')}
          {this.renderSquare('delete')}
          </div>
        </div>
        </div>
      );
    }
  }


export default Grid;
