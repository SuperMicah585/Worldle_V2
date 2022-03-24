import React from 'react';
import "./Win_Screen.css"

class Win extends React.Component {

  constructor(props) {
  super(props);
console.log(this);
  this.state ={
    trigger: this.props["trigger"],
  };

}



    render() {
      return (
        <div>
        {(this.state["trigger"]) ? (
        <div className ="popup">
        <div className ="popup-inner">
        <button className="close-btn" onClick={() => this.setState({trigger: false})}>close</button>
        {"   You win!"}
        </div>
        </div>
      ) : "" }
        </div>


      );
    }

  }
  export default Win;
