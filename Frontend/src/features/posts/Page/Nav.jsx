import React from 'react'
import "../share/Nav.scss"
import { useNavigate } from 'react-router-dom'

const Nav = () => {
    const navigete = useNavigate()
  return (
    <div className='Navs'>
      <p>INSTA CLONE</p>
      <button onClick={()=>{navigete("/post")}}>Create post</button>
    </div>
  )
}

export default Nav
