import React from 'react'
import { Link } from 'react-router-dom'
import '../share/style.scss'

const Loing = () => {
  return (
   <main>
    <div className="form-contener">
        <h1>Login</h1>
        <form>
            <input type="text" placeholder='Username' name='username' />
            <input type="password" placeholder='Password' name='password' />
            <button className='button entire-button'>Login</button>
        </form>
          <p>Don't have an account? <Link to="/register">Register</Link></p>
    </div>
   </main>
  )
}

export default Loing
