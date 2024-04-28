import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [update, setUpdate] = useState("");
  const [taskCompleted, setTaskCompleted] = useState(false);
  const [count,setcount]=useState(1);
  const handleChange = (event) => {
    setUpdate(event.target.value);
  };
  

  const addTask = () => {
   
      setcount(count+1);
      document.getElementById("panel").innerHTML += `<div id="task${count}"> <span><li>${update}</li></span><button class="done">Done</button>
      <button class="remove">Delete</button></div>`;

      document.addEventListener('click', function(event) {
        if (event.target.classList.contains('done')) {
          const taskId = event.target.parentNode.id;
          document.getElementById(taskId).querySelector('span').style.textDecoration = 'line-through';
          const quotes=["​​We will fail when we fail to try.","Make each day your masterpiece.","Don’t count the days, make the days count.",
        "The plan is to fan this spark into a flame.","Light tomorrow with today."
      ];
          var RandomInd=Math.floor(Math.random()*quotes.length);
          var RandomQuotes=quotes[RandomInd];
          document.getElementById("quotes").innerText=RandomQuotes;
        }
      });
      document.addEventListener('click',function(event){
        if(event.target.classList.contains('remove')){
          const taskId = event.target.parentNode.id;
          document.getElementById(taskId).remove();

          
        }
        
        var TasksLen=document.querySelectorAll('.panel > div').length;
        if(TasksLen === 0){
          
          document.getElementById("quotes").innerText="";
         }
         
        
      })
      
    setUpdate("");
   
  };

  useEffect(() => {
    document.getElementById("txt").value = update;
  }, [update]);

  
 

  return (
    <>
    <div className="container">
      <h1>To-do list📝</h1>
      <div className="to-do">
        <div className="panel" id="panel">
          Tasks:
          
        </div>
        <p id="quotes"></p>
      </div>
      <br />Enter the task:
        <input type="text" id="txt" onChange={handleChange} />
        <button onClick={addTask}>Add</button>
        </div>
    </>
  );
}

export default App;
