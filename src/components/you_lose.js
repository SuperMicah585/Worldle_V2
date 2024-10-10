import React from 'react';
import "./you_lose.css"

class Lose extends React.Component {

  constructor(props) {
  super(props);
  this.state ={
    lose_trigger: this.props["lose_trigger"],
  };

}



render() {

  return (
    
    <div style = {{zIndex:300}}>
    {(this.state["lose_trigger"]) ? (
    <div className ="popup">

    <button className="close-btn" onClick={() => this.setState({lose_trigger: false})}>You Lose!</button>
    </div>

  ) : "" }
    </div>


  );
}

  }
  export default Lose;
