import React, {useState} from 'react';
import Display from './Display'
function Dashboard(props) {
 const [strikes, setStrikes] = useState(0)
 const [balls, setBalls] = useState(0)
 const [foul, setFoul] = useState(0)
 const [hit, setHit] = useState(0)



 
 return (
  <>
   <button>Strike</button>
   <button>Ball</button>
   <button>Foul</button>
   <button>Hit</button>

   <Display strikes={strikes} balls={balls} foul={foul}/>
  </>
 );
};

export default Dashboard;