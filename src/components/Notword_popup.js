import React, { useState, useEffect } from 'react';
import "./notword_popup.css"



const Notword_popup = () => {


const [not_word, setnot_word] = useState(false);


 useEffect(() => {
setnot_word(true);
}, []);



useEffect(() => {
setTimeout(() => setnot_word(false),1000)
}, []);


//need to makae this scaleable. I.e it only works once.
//also on Grid I need to set state to false after 'not a word' if statement is triggered.
//setTimeout(() => setnot_word(false),1000)




//What do I need it to do?
//




//think about using a UseEffect on another component to see if I can control the updates


  return (
      <div>

        <div
          className={`alert alert-success ${(not_word) ? 'alert-shown' : 'alert-hidden'}`}



        >
          <div style = {{backgroundColor:'red',display:'flex',padding:'15px',borderRadius:'10px',zIndex:100}}>
          <strong>Word not found in database</strong>
          </div>
        </div>

      </div>
    );
};


  export default Notword_popup;
