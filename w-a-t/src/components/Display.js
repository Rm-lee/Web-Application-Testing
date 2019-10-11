import React from 'react';

function Display(props) {
 return (
  <div className="score-board">
   <div>
    <p>Strikes</p>
    <p>{props.strikes}</p>
   </div>
   <div>
   <p>Balls</p>
   <p>{props.balls}</p>
  </div>  
 
  </div>
 );
 };

export default Display;