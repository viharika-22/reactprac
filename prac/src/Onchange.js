import React,{useState} from 'react'

function Onchange() {
    const [user, setUser]=useState("")
    const useName= (e)=>{setUser(e.target.value)}
  return (
    <div>
      <input type='text' placeholder='Enter text' value={user} onChange={useName}/>
      <br/>
      {user}
    </div>
  )
}

export default Onchange
