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
          {}
          <strong>Word not found in database</strong>
            {}
        </div>

//why does it only work with button?
// button -> changes state to true. Rerenders page and goes through if statement that goes through the onTransitionEnd
//no buton -> starts as true. shows alert, but never transitions to false. That is the question!
//-----
//difference is that we do not use setState with no button
      </div>
    );
};


  export default Notword_popup;
