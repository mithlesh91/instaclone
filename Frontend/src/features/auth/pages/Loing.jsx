import React from 'react'
import { Link } from 'react-router-dom'
import '../share/style.scss'
import { useState, useEffect } from 'react'

const Loing = () => {
  const [username, setusername] = useState('')
  const [password, setpassword] = useState("")

   function formhandle(e){
     e.preventDefault()
     console.log("username",username)
     console.log("password",password)
  }



  return (
    <main>
      <div className="form-contener">
        <h1>InstaCLone</h1>
        <form onSubmit={formhandle}>
          <input
            value={username}
            onChange={(e) => { setusername(e.target.value) }}
            type="text" placeholder='Username or Email'
            name='username'
          />
          <input
            value={password}
            onChange={(e) => { setpassword(e.target.value) }}
            type="password" placeholder='Password'
            name='password'
          />
          <button className='button entire-button'>Log In</button>
        </form>
        <p>Don't have an account? <Link to="/register">Sign up</Link></p>
      </div>
    </main>
  )
}

export default Loing
