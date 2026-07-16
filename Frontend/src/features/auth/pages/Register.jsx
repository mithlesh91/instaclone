import React from 'react'
import { Link } from 'react-router-dom'
import '../share/style.scss'
import { useAuth } from '../Hooks/use.Auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const navigate = useNavigate()

  const { user, loading, registerhandle } = useAuth()

  async function formhandle(e) {
    e.preventDefault()

    await registerhandle(username, email, password);
    navigate("/Login")

    setemail("")
    setusername("")
    setpassword("")
    console.log("username", username)
    console.log("email", email)
    console.log("password", password)
  }

  if (loading) {
    return (
      <main>
        loading....
      </main>
    )
  }

  return (
    <main>
      <div className="form-contener">
        <h1>Create Account</h1>
        <form onSubmit={formhandle}>
          <input
            value={username}
            onChange={(e) => { setusername(e.target.value) }}
            type="text" placeholder='Username'
            name='username'
          />
          <input
            value={email}
            onChange={(e) => { setemail(e.target.value) }}
            type="email" placeholder='Email'
            name='email'
          />
          <input
            value={password}
            onChange={(e) => { setpassword(e.target.value) }}
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
