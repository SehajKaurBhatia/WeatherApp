{/* <table class="styled-table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>john@example.com</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jane Smith</td>
                <td>jane@example.com</td>
            </tr>
            <!-- Add more rows as needed -->
        </tbody>
    </table> */}
    import  { useState } from 'react';
    import "./App.css";
const Player = () => {
  
 
  
  const[name,setname]=useState("");
  const[nameerror,setnameerror]=useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    

  };
  const handlenamechange=(event)=>{
    setname(event.target.value);
  
}
// useState(()=>{
//     if(name===""){
//         setnameerror("Enter field");
//     }
// },[nameerror]);
  
  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
            <td>
                Name:
            </td>
            <td>
                <input type="text" value={name} onChange={handlenamechange}/>
            </td>
            <td>{nameerror}</td>
            </tr>

              
            <tr>
              <td>Password:</td>
              <td>
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </td>
              <td>{passwordError && <span style={{ color: 'red' }}>{passwordError}</span>}</td>
            </tr>
            <tr>
                <td>Country origin:</td>
                <td>
                    <selection>
                        <option>India</option>
                        <option>US</option>
                        <option>Ireland</option>
                        <option>Indonesia</option>
                        <option>Argentina</option>
                        <option>Malaysia</option>
                        <option>Denmark</option>
                        <option>Germany</option>
                        
                    </selection>
                </td>
            </tr>
            <tr>
              <td colSpan="3">
                <button type="submit">Sign Up</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Player;
