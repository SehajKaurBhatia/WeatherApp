import {useState} from 'react';


function Joke(){
const[joke,setjoke]=useState("");
const[dice,setdice]=useState(0);
const jokes=[
    "Why don't scientists trust atoms? Because they make up everything!",
    "What do you call cheese that isn't yours? Nacho cheese!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!",
    "Why did the bicycle fall over? Because it was two-tired!"
]
const num=[1,2,3,4,5,6,7,8,9,0];

const Handlejokes=()=>{
    var index=Math.floor(Math.random()*jokes.length);
    var index1=Math.floor(Math.random()*num.length);
    setdice(index1);
    setjoke(jokes[index]);

}

    return(
        <>
        
        <div>
        <h3>Random Jokes Generator</h3>
            <p>{joke}</p></div>
            <br/>
            <h3>Random Number Generator</h3>
            <p>{dice}</p>
        <button onClick={Handlejokes}>Generate</button>
        </>
    );
}
export default Joke;