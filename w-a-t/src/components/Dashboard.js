import React, {useState} from 'react';
import Display from './Display'

function Dashboard(props) {
 const [strikes, setStrikes] = useState(0)
 const [balls, setBalls] = useState(0) 
if(balls >= 4 || strikes >=3){
 setBalls(0)
 setStrikes(0)
}

const newFoul = () => {
if(strikes <2 ){
 setStrikes(strikes + 1) 
 }
}


 return (
  <>
  <div className="button-container">
   <button onClick={e => setStrikes(strikes + 1)}>Strike</button>
   <button onClick={e => setBalls(balls + 1)}>Ball</button>
   <button onClick={e => newFoul()}>Foul</button>
   <button onClick={e => {setStrikes(0); setBalls(0)}}>Hit</button>
</div>
   <Display strikes={strikes} balls={balls} />
  </>
 );
};

export default Dashboard;