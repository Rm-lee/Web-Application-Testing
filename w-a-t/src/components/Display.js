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
  <div>
  <p>Fouls</p>
  <p>{props.foul}</p>
 </div>
 <div>
    <p>Hits</p>
    <p>{props.hit}</p>
   </div>
  </div>
 );
 };

export default Display;