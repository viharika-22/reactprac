import React, { useState } from 'react'

const NavBar = () => {
    const [resourceType, setResourseType]=useState('posts')

  return (<>
    <div>
      <button onClick={()=> setResourseType('posts')}>Post</button>
      <button onClick={()=> setResourseType('users')}>Users</button>
      <button onClick={()=> setResourseType('comments')}>comments</button>
    </div>
    <h2>{resourceType}</h2>
    </>
  )
}

export default NavBar
