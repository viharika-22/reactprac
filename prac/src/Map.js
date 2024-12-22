import React from 'react'

function Map() {
    const arr=[{id:1,student:"Viha",uni:"Gitam"},{id:2,student:"Varsha",uni:"Gitam"},{id:3,student:"Karthik",uni:"Aditya"},{id:4,student:"Pujji",uni:"Raghu"},{id:5,student:"SriLekha",uni:"Gayatri"},{id:6,student:"Bhavya",uni:"JNTU"},]
  return (
    <div>
      {arr.map((i) => <li key={i.id}>{i.student},{i.uni}</li>)}
    </div>
  )
}

export default Map
