import React from 'react';
import "./Win_Screen.css"

class Lose extends React.Component {

  constructor(props) {
  super(props);
console.log(this);
  this.state ={
    lose_trigger: this.props["lose_trigger"],
  };

}



    render() {
      return (
        <div>
        {(this.state["lose_trigger"]) ? (
        <div className ="popup">
        <div className ="popup-inner">
        <button className="close-btn" onClick={() => this.setState({lose_trigger: false})}>close</button>
        {"   You Lose!"}
        </div>
        </div>
      ) : "" }
        </div>


      );
    }

  }
  export default Lose;
