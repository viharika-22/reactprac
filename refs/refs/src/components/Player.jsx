import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  // const [name,setName]=useState('')
  const[newName,setNewName]=useState(null)
  const playerName = useRef()
  // function handleName(e){
  //   setNewName(false)
  //   setName(e.target.value)
  // }
  function handleClick(){
    setNewName(playerName.current.value)
  }
  return (
    <section id="player">
      <h2>Welcome {newName ?? 'unknown entity'}</h2>
      <p>
        <input type="text" ref={playerName}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
