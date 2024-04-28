import {useState,useEffect} from 'react'



function Product(){
    const[count,setcount]=useState(0);
    const[acount,setacount]=useState(30);
    const[ocount,setocount]=useState(30);
    const[lcount,setlcount]=useState(30);
    const[kcount,setkcount]=useState(30);
    const Select=()=>{
      document.getElementById("total").innerText="Total: "+count;
    //    divv="Total"+{count};

    }
    const Apple=()=>{
        const val=document.querySelector('#apple').value;
        if(val){
            if(val>0){
            setacount(acount-1);
            setcount(count+1);
            }
        }
    }
    const Orange=()=>{
        const val=document.querySelector('#orange').value;
        if(val){
            if(val>0){
            setocount(ocount-1);
            setcount(count+1);
            }
        }
    }
    const Lime=()=>{
        const val=document.querySelector('#lime').value;
        if(val){
            if(val>0){
            setlcount(lcount-1);
            setcount(count+1);
            }
        }
    }
    const Kiwi=()=>{
        const val=document.querySelector('#kiwi').value;
        if(val){
            if(val>0){
            setkcount(kcount-1);
            setcount(count+1);
            }
        }
    }
    
return(
    <>
    <h1>Items🧺</h1>
    
    <h3 >Apple  Count:<input type="text" value={acount} id="apple"readOnly/></h3><button onClick={Apple}>Select🍎</button>
    <h3 >Orange Count: <input type="text"value={ocount} id="orange"readOnly/></h3><button onClick={Orange}>Select🍊</button>
    <h3 >Lime Count: <input type="text"value={lcount} id="lime"readOnly/></h3><button onClick={Lime}>Select🍋</button>
    <h3 >Kiwi Count: <input type="text"value={kcount} id="kiwi"readOnly/></h3><button onClick={Kiwi}>Select🥝</button><br/>
    <button onClick={Select}>Submit</button><br/>
    <div id="total"></div>
    
    </>
)
}
export default Product;