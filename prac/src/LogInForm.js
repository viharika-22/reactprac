import React,{useState} from 'react';

function LogInForm() {
    const [data,setData]=useState({
        username:'',
        password:''
    })
    const{username,password} =data
const changeHandler = e => {setData({...data,[e.target.name]:[e.target.value]})}
const submitHandler = (e)=>{
    e.preventDefault()
    console.log(data)}
  return (
    <div className='loginCont'>
      <div className='loginFormHolder' >
      <form onSubmit={submitHandler}>
      <input type='text' name='username' placeholder='Username' value={username} onChange={changeHandler} /><br/>
      <input type='password' name='password' placeholder='Password' value={password} onChange={changeHandler}/><br/>
      <input type='submit' name='submit'/>
      </form>
      </div>
    </div>
  )
}

export default LogInForm
