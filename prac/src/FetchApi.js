import { useState,useEffect } from "react";
import React from 'react';

function FetchApi() {
    const [data,setData]=useState([]);
    useEffect((
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res=>res.json())
        .then(d=>setData(d))
    ),[])
  return (
    <div>
      {data.map(item=><ul>{item.title}</ul>)}
    </div>
  )
}

export default FetchApi
