import Banner from './banner.jsx'
import './electronics.css'
import {useState} from 'react'
function Electronics(){
    const[img,setimg]=useState(0);
    const imgs=["./images/e1.png","./images/e2.png","./images/e3.png","./images/e4.png"]
    const Handlenext=()=>{
        const ind=(img+1)%imgs.length;
        setimg(ind);
    }
    const Handleprev=()=>{
        const ind=(img-1+imgs.length)%imgs.length;
        setimg(ind);
    }
    return(
        <>
        <Banner/>
        <div class="banner3"><h4>Mobile & Accessories</h4>
        <h4>TV & Home Entertainment</h4>
        <h4>Laptop & Accessories</h4>
        <h4>Audio</h4>
        <h4>Cameras</h4>
        <h4>Computer Peripherals</h4>
        <h4>Smart Technology</h4>
        <h4>Musical Instruments</h4>
        <h4>Office & Stationery</h4>
        </div>
        <div class="container1">
            
            <div class="categories">
                <h3>Electronics</h3>
           <h4> Accessories</h4>
           <h4>Cameras & Photography</h4>
           <h4>Car & Vehicle Electronics</h4>
           <h4>Computers & Accessories</h4>
           <h4>GPS & Accessories</h4>
           <h4>Home Audio</h4>
           <h4>Home Theater, TV & Video</h4>
           <h4>Mobiles & Accessories</h4>
           <h4>Portable Media Players</h4>
           <h4>Radio Communication</h4>
           <h4>Tablets</h4>
           <h4>Telephones & Accessories</h4>
           <h4>Warranties</h4>
           <h4>eBook Readers & Accessories</h4>
           <hr class="vertical-line"></hr>
            </div>
            <div class="slides">
                <div class="s1">
                    <img style={{width:'1100px',height:'300px'}}src={imgs[img]}/>
                    <button id="btn1" onClick={Handleprev}>prev</button>
                    <button id="btn2"onClick={Handlenext}>next</button>
                </div>
                <div class="s2">
                    <img style={{width:'1100px',height:'300px'}}src="./images/last.png"/>
                </div>
            </div>
        </div>
        </>
    )
}
export default Electronics;