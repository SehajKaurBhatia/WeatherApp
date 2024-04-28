export default function Form({onSubmit,onText}){

    return(
    <>
    <form onSubmit={onSubmit}>
      <input id="text" type="text" onChange={onText}/>
      <button type="submit"id="sub">Submit</button>
      <p id="error"></p>
    </form>
    </>
      

);
    
}