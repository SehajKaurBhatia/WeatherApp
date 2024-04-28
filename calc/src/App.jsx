import { useState,useEffect } from 'react'
import './App.css'


function App() {
  const[num,setnum]=useState(0);
 const[op, setop]=useState("");
  const Add=()=>{
    var val= parseInt(document.getElementById("num").value);
  
   
    setnum(num+val);
    setop("Addition");
   
  }
  const Sub=()=>{
    var val= parseInt(document.getElementById("num").value);
    
      setnum(num-val);
      setop("Subtraction");
    

  }
  const Mul=()=>{
    var val= parseInt(document.getElementById("num").value);
    
      setnum(num*val);
      setop("Multiplication");
     

  }
  const Div=()=>{
    var val= parseInt(document.getElementById("num").value);
    if(val!=0){
      
      setnum(num/val);
      
     } 
     else{
      alert("undefined");
     }
     setop("Division");
  }
  const Clc=()=>{
    setnum(0);
    setop("");
  }
  //it measures whether the value of var has occurred any change from its prev value or not,if yes then useEffect executes
  //everytime the value of result changes it will print the value into console

useEffect(()=>{
console.log(`Result: ${num}`);
},[num]);
  return (
    <>
     <h1>Calculator🧮</h1>
     Result:
     
     <input type="text" value={num} id="result" readOnly/>
     Input a value:
     <input type="number" id="num"/>
     <button onClick={Add} >Addition</button>
      <button onClick={Sub}>Subtraction</button>
     <button onClick={Mul}>Multiplication</button>
     <button onClick={Div}>Division</button>
     <button onClick={Clc}>Clear</button><br/>
     <h4>Operation being executed:{op}</h4>
     
      
    </>
  )
}

export default App;
