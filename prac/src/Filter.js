import React from 'react'

function Filter() {
    const arr=["jhnj","kkiy","coco","baily","popo","nomnom"]
    const filterd=arr.filter(i=>i.includes("o"))
  return (
    <div>
      {
        filterd.map(item=><li>{item}</li>)
      }
    </div>
  )
}

export default Filter
