import React,{useState,useEffect} from 'react'

function Useffect() {
    const [count,setCount]=useState(0)
    useEffect(()=>{console.log(count)},[count])
  return (
    <div>
        {count}
        <br/>
      <button onClick={()=>{setCount(count+1)}}>Add</button>
    </div>
  )
}

export default Useffect
