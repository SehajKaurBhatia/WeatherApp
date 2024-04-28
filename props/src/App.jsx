
import './App.css'
import Joke from './Joke.jsx'
function App() {
  const Joke2='I used to be a banker,but then I lost interest.'
  const Joke3={
    joke:"c",
    rating:2
  }
  
  //if the data was in array form n needed to be displayed 
  const Jokes=[
    {
      joke:"Im afraid for the calendar, its days are numbered.",
    rating:4
    },
    {
      joke:"I'm reading a book about anti-gravity, its impossible to put down.",
    rating:2
    },
    {
      joke:"tyttyd",
    rating:3
    }
  ]
  return (
    <>
      <div>
        <h1>Dad Jokes 101</h1>
       <Joke joke="a" rating={4}/>
       {/* These are properties called as props which are rendered into the Joke component and 
       called back here to display. eg-joke="a" rating={4} */}
       <Joke joke={Joke2} rating={3}/>
       <Joke {...Joke3}/>
       {/* Method 1 */}
       {/* <Joke joke={Jokes[0].joke} rating={Jokes[0].rating}/>
       <Joke joke={Jokes[1].joke} rating={Jokes[1].rating}/>
       <Joke joke={Jokes[2].joke} rating={Jokes[2].rating}/> */}
       {/* Method 2 using map */}
       {Jokes.filter(joke=>joke.rating>1).map((joke,index)=>
       {
        return<Joke key={index} joke={joke.joke} rating={joke.rating}/>
       })}
       
        </div>
    </>
  )
}

export default App;
