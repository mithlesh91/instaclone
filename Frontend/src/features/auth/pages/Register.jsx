import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
     <main>
    <div className="form-contener">
        <h1>Login</h1>
        <form>
            <input type="text" placeholder='Username' name='username' />
            <input type="text" placeholder='email' name='email'/>
            <input type="password" placeholder='Password' name='password' />
            <button type='submit'>Register</button>
        </form>
        <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
   </main>
  )
}

export default Register
