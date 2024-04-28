
import './banner.css'
function Banner(){
return(
    <>
    <div class="topbanner">
        <img style={{width:'150px',marginTop:'5px',height:'50px'}} src="./public/images/logo.jpg"></img>
        <img style={{width:'1000px',height:'50px'}} src="./public/images/search.png"></img>
        <img style={{width:'350px',height:'40px',transform:'translateY(4px)'}} src="./public/images/cart.png"></img>
    </div>
    <div class="bottombanner">
    <img styles="width:1px; height:1px" src="./images/d.png"/>
        <div>All</div>
        <div>Fresh</div>
        <div>Amazon miniTV</div>
        <div>Sell</div>
        <div>Best Sellers</div>
        <div>Mobiles</div>
        <div>Today's Deals</div>
        <div><select id="s1"><option id="s1">Prime</option></select></div>
        <div>Customer Service</div>
        <div>Electronics</div>
        <div>New Releases</div>
        <div>Home & Kitchen</div>
        <div>Fashion</div>
        <div>Amazon Pay</div>
        <div>Gift Ideas</div>
        <div>Computers</div>
        <div>Books</div>
    </div>
    </>
)
}
export default Banner;