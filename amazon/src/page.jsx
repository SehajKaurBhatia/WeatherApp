import './page.css'
function Page(){
return(
    <>
    <div class="container2">
        <div class="pg1">
            <img style={{width:'400px', marginLeft:'20px'}}src="./images/img.png"></img>
            <p style={{marginLeft:'430px', marginTop:'-220px', fontFamily:'Amazon Ember, Arial, sans-serif'}}><h2>Your Amazon Cart is empty</h2>
            <p style={{transform:'translateY(-15px)'}}>Shop today's deals</p>
            </p>
            <button class="bt1" style={{marginLeft:'430px', marginTop:'-220px'}}>Sign in to your account</button>
            <button class="bt2" style={{marginLeft:'20px', marginTop:'-220px'}}>Sign up now</button>
        </div>
        <div class="pg2"></div>
        <p style={{marginLeft:'20px',fontSize:'small', fontFamily:'Amazon Ember, Arial, sans-serif',lineHeight:'20px'}} >The price and availability of items at Amazon.in are subject to change.
         The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price.<br/>
        Do you have a promotional code? We'll ask you to enter your claim code when it's time to pay.</p>
        <div class="pg3">
            < hr style={{transform: 'translateY(20px)'}}/>
            <p style={{marginLeft:'650px',transform: 'translateY(30px)' }}>See personalized recommendations</p>
            <button class="SignIn">Sign in</button>
            <p style={{marginLeft:'680px' , transform: 'translateY(-15px)'}}>New customer?<a href="" style={{textDecorationLine:'none'}}>Start here.</a> </p>
            <hr style={{ transform:'translateY(-20px)'}}/>
        </div>
    </div>
    </>
)
}
export default Page;