import {useState} from 'react'
export default function State(){
 const [likes,setlikes]=useState(0);
    const handleLike=()=>{
        setlikes(likes+1);
        console.log("Likecount",likes);
    }
    const handleDislike=()=>{
        if(likes>0){
        setlikes(likes-1);
        console.log("Dislikecount",likes);
        }
        else{
            setlikes(0);
            console.log("Dislikecount",likes);
        }
    }
    return(
        <>
        <h1>Give a like or dislike</h1>
        <p>
           Count : {likes}
        </p>
        <button onClick={handleLike}>Like👍</button>
        <button onClick={handleDislike}>Dislike👎</button>
        </>
    )

}
