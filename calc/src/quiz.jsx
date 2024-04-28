import {useState} from'react'
function Quiz(){
const[score,setscore]=useState(0);
const[OneLock,setonelock]=useState(false);
const[TwoLock,settwolock]=useState(false);
const One=()=>{
    const val=document.querySelector("input[name='mcq']:checked");
    if(!val){
        alert("select an option") ;
        
        
    }
    else if(val){
        setonelock(true);
        if(val.value==="correct"){
            setscore(score+5);
            
        }
    }
}
const Two=()=>{
    const val=document.getElementById("txt").value;
    if(val!=""){
        settwolock(true);
        if(val==="food"|| val==="Food"){
            setscore(score+5);
            
        }
    }
    else{
        alert("enter a value");
    }
}
const Submit=()=>{
    document.getElementById("ans").innerText="Score: "+score+"/10";
}

    return(
        <>
        <h1>Quiz📝</h1>
        <h3>Question 1</h3>
        <input name="mcq"type="radio" value="incorrect" disabled={OneLock} />
        <input name="mcq"type="radio" value="incorrect" disabled={OneLock}/>
        <input name="mcq"type="radio" value="correct" disabled={OneLock}/>
        <button onClick={One} disabled={OneLock}>Lock</button>
        <h3>Question 2</h3>
        <input id="txt"type="text" disabled={TwoLock}/>
        <button onClick={Two} disabled={TwoLock}>Lock</button><br/>
        <button onClick={Submit}>Submit</button>
        <div id="ans"></div>
        </>
    )
}
export default Quiz;