import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Header() {
  const [loggedIn, setLoggedIn] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    setLoggedIn(localStorage.getItem('loggedIn') === 'true')
  }, [])

  const handleLogout = () => {
    localStorage.setItem('loggedIn', 'false')
    navigate('/')
    window.location.reload()
  }

  return (
    <header className="header">
      <nav>
        <Link to="/">Home</Link> | <Link to="/programs">Programs</Link>{' '}
        {loggedIn ? (
          <>
            | <Link to="/dashboard">Dashboard</Link>{' '}
            | <button onClick={handleLogout} className="logout-btn">Logout</button>
          </>
        ) : (
          <>
            | <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  )
}
