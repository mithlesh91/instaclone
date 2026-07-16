import React from 'react'
import { Link } from 'react-router-dom'
import '../share/style.scss'

import { useState } from 'react'

const Register = () => {
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    function formhandle(e) {
        e.preventDefault()
        console.log("username",username)
        console.log("email",email)
        console.log("password",password)
    }

    
  return (
    <main>
      <div className="form-contener">
        <h1>Create Account</h1>
        <form onSubmit={formhandle}>
          <input 
          value={username}
          onChange={(e)=>{setusername(e.target.value)}}
          type="text" placeholder='Username'
           name='username'
            />
          <input
           value={email}
          onChange={(e)=>{setemail(e.target.value)}}
           type="email" placeholder='Email'
            name='email' 
            />
          <input 
           value={password}
          onChange={(e)=>{setpassword(e.target.value)}}
          type="password" placeholder='Password' 
          name='password' 
          />
          <button type='submit' className='button entire-button'>Sign Up</button>
        </form>
        <p>Already have an account? <Link to="/login">Log in</Link></p>
      </div>
    </main>
  )
}

export default Register
