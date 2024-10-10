import React from 'react';
import "./Win_Screen.css"

class Win extends React.Component {

  constructor(props) {
  super(props);
  this.state ={
    trigger: this.props["trigger"],
  };

}



    render() {
      return (
        <div style = {{zIndex:300}}>
        {(this.state["trigger"]) ? (
        <div className ="popup">

        <button className="close-btn" onClick={() => this.setState({trigger: false})}>You Win!</button>
        </div>
 
      ) : "" }
        </div>


      );
    }

  }
  export default Win;
