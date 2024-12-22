import React,{useState} from 'react'

export default function S() {
    let [fChar, setFchar]=useState("Shikamaru")
  return (
    <div>
      <h4>{fChar}</h4>
      <button onClick={()=>{setFchar(fChar="Temari")}} >Fav Character</button>
    </div>
  )
}
