import Form from './Form.jsx'
import './App.css'

function App() {
  function handleClick(){
    console.log("Button Clicked");
  }
  function handleForm(event){
    event.preventDefault()
    const value=document.getElementById("text").value;
    if(value===""){
     const error= document.getElementById("error");
     error.innerText="*Required field";
      error.style.color="red";
    }
    else{
      const error= document.getElementById("error").innerText="";
    }
    console.log("Form Submitted");
  }
  function handleTextChange(event){
    const SubmitButton=document.getElementById("sub");//on clicking on submit only the value will be recorded
  SubmitButton.addEventListener("click",function(){
    console.log(event.target.value);//this returns and keeps a track of the values entered
  });
}
  
  return(
    <>
    <button onClick={handleClick}>Do Something</button>
    <Form onSubmit={handleForm } onText={ handleTextChange}/>
    </>
  )
}

export default App;
