import React,{useState} from 'react';

function SignUp() {
    const [data,setData]=useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:''
    })
    const{username,email,password,confirmPassword} =data
const changeHandler = e => {setData({...data,[e.target.name]:[e.target.value]})}
const submitHandler = (e)=>{
    e.preventDefault()
    console.log(data)}
  return (
    <div className='loginCont'>
      <div className='SignUpHolder' >
      <form onSubmit={submitHandler}>
      <input type='text' name='username' placeholder='Username' value={username} onChange={changeHandler} /><br/>
      <input type='email' name='email' placeholder='E-mail' value={email} onChange={changeHandler} /><br/>
      <input type='password' name='password' placeholder='Password' value={password} onChange={changeHandler}/><br/>
      <input type='password' name='confirmPassword' placeholder='Confirm Password' value={confirmPassword} onChange={changeHandler}/><br/>
      {/* {password!== confirmPassword && password && confirmPassword? (<p>Password not matching</p>):null} */}
      {username.length <= 5 ? <p>Username must be of more than 5 chars</p>:<p> </p>}  
      <input type='submit' name='submit'/>
      </form>
      </div>
    </div>
  )
}

export default SignUp
