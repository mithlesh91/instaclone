import React from 'react'
import "../Component/LogOut/Logout.scss"

import { postuse } from '../Hooks/post.use'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const{logouthandle}=postuse()
    const navigate = useNavigate()
    function logout(){
        logouthandle()
        navigate("/login")
    }
  return (
    <div className='log'>
      <button onClick={()=>{logout()}}>Logout</button>
    </div>
  )
}

export default Logout
