import { useState } from 'react'
import './NavBar.css'

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="nav-outer">
      <nav className="nav-inner">
        <div className="nav-container">
          <div className="nav-logo">
            <div className="logo-box">ED</div>
          </div>

          <div className="nav-center">
            <div className="nav-links">
              <a href="#">Home</a>
              <a href="#">Services</a>
              <a href="#">About</a>
            </div>
          </div>

          <div className="nav-right">
            <a className="cta" href="#">Contact</a>
            <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
            </button>
          </div>
        </div>

        <div className={`mobile-menu ${open ? 'open' : ''}`}>
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">About</a>
          <a href="#" className="cta">Contact</a>
        </div>
      </nav>
    </div>
  )
}
