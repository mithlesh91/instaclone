import React from 'react'
import { Link } from 'react-router-dom'
import '../share/style.scss'
import { useState, useEffect } from 'react'
import { useAuth } from '../Hooks/use.Auth'
import { useNavigate } from 'react-router-dom'

const Loing = () => {
  const [username, setusername] = useState('')
  const [password, setpassword] = useState("")
  const { user, loading, loginhandle } = useAuth()
  const navigate = useNavigate()

  async function formhandle(e) {
    e.preventDefault()

    await loginhandle(username, password)
    navigate("/")

    setusername("")
    setpassword("")

    console.log("username", username)
    console.log("password", password)
  }

  if (loading) {
    return (
    <main>
      loading ...
    </main>
    )
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
