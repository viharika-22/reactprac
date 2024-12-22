import React,{useState} from 'react';
import './Card.css';
function Card(props) {
   
  return (
        <div className='cardContainer'>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
    </div>
    
  )
}

export default Card
