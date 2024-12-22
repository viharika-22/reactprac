import React, { useState } from 'react'
function FormData() {
    const [data,setData]=useState({
        username:'',
        password:''
    })
    const {username,password} =data
    const onChange = (e)=>{
        setData({...data,[e.target.name]:[e.target.value]})
    }
    const onDataSubmit =(e)=>{
        e.preventDefault()
        console.log(data)
    }

  return (
    <div>
      <form onSubmit={onDataSubmit}>
        <input type='text' placeholder='Username' value={username} name="username" onChange={onChange}/>
        Check to see subscription types
        <br/>
        <input type='password' placeholder='Password' value={password} name="password" onChange={onChange}/>
        <button type="Clear">Clear</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default FormData
