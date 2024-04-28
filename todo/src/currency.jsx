import {useState} from 'react';
function Currency(){
const[amt,setamt]=useState(0);

const Handleyen=()=>{
var inr=parseFloat(document.getElementById("num").value);
var yen=inr*1.86;
setamt(yen);
}
const Handleusd=()=>{
    var inr=parseFloat(document.getElementById("num").value);
    var usd=inr*0.012;
    setamt(usd);
    }
    const Handleeuro=()=>{
        var inr=parseFloat(document.getElementById("num").value);
        var euro=inr*0.011;
        setamt(euro);
        }
    return(
        <>
        <h3>Enter a value(in INR):</h3>
        <input type="number" id="num"></input>
        <input type="number" value={amt} readOnly/>
        <button onClick={Handleyen}>Convert to yen</button>
        <button onClick={Handleusd}>Convert to usd</button>
        <button onClick={Handleeuro}>Convert to Euro</button>
      
        </>
    )
}
export default Currency;
//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = () => {
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
    } else {
      setPasswordError('');
    }
  };