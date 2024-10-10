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
        <div className ="popup-win">

        <button className="close-btn-win" onClick={() => this.setState({trigger: false})}>You Win!</button>
        </div>
 
      ) : "" }
        </div>


      );
    }

  }
  export default Win;
