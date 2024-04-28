import {useState} from 'react'


function Stopwatch(){
    const[time,settime]=useState(0);
    const[stoptime,setstoptime]=useState(0);
    const[run,setrun]=useState(false);
    var interval=null;
const Start=()=>{
    if(!run){
        setrun(true);
        interval=setInterval(()=>{settime((time)=>time+1)},100);
    }
   
        
    
}
const Stop = () => {
    clearInterval(interval);

    
    
        setrun(false);
        
        settime(0);
    
    setstoptime(time);
   
     // Clear the interval ID from state
};

const Pause=()=>{
    clearInterval(interval);
    setrun(false);
    setstoptime(time);
}
    return(
        <>
        
        <p >{time}</p><br/>
        <p id="time">{stoptime}</p>
        <button onClick={Start} disabled={run}>Start</button>
        <button onClick={Stop} >Stop</button>
        <button onClick={Pause}>Pause</button>
        </>
    )
}
export default Stopwatch;