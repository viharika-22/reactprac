import { useRef } from "react";
import { useState } from "react";

export default function Login() {
// Appoch using state

//   const [enteredValue,setEnteredValue]= useState({
//     email:'',
//     password:''
//   })


// function handleEmail(e){
// setIsEmail(e.target.value)
// }

// function handlePassword(e){
// setIsPassword(e.target.value)
// }

// function handleInput(id,value){
//   setEnteredValue((prevValue)=>({
//     ...prevValue,
//     [id]:value
//   }))
// }

// Appoch using ref

const enteredEmail=useRef()
const enteredPassword=useRef()

function handleSubmit(e){
  e.preventDefault();
  
  const emailValue= enteredEmail.current.value
const passwordValue= enteredPassword.current.value
console.log(emailValue,passwordValue)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={enteredEmail}/>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={enteredPassword}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
