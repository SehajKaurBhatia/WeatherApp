
import './App.css'
//javascript is run in {} braces.
function sayHello(){
  console.log('hello world');
}

const Func1=()=>{
  const HandleClick=()=>{
    var text=document.getElementById("txt");
    text.classList.add('App1');
  }
  const HandleClick1=()=>{
    var text=document.getElementById("txt");
    text.classList.remove('App1');
  }
  return(
    <>
    <button id="but1" onClick={HandleClick}>Start</button>
    <button id="but1" onClick={HandleClick1}>Stop</button>
    </>
  )


};

function App() {//Main and only component that is rendered. 
  //inorder to have multiple components , render them as a markup inside the main component.
 sayHello();
const date=new Date().toString();
  return (
    <>
      <div className="App">
      <h1 id="txt">Hello World</h1>
      </div>
      <p>Sum:{6+9}</p>
      <p>{date}</p>
      
      <Func1/>
      
      </>
   
  )
  
}

export default App;
// export default Func1;
