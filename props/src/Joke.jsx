const Joke=(props)=>{
    props.rating
    let stars="";
    for(var i=0;i<5;i++){
        if(i<props.rating){
        stars+="⭐";
    }
    else{
        stars+="-";
    }
}
   
    return(
        <>
        <p>{props.joke}</p>
        <p>{stars}</p>
        
        </>
    )
}
export default Joke;