import { useState } from 'react'
import './NavBar.css'

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand">
          <div className="brand-icon" aria-hidden="true"></div>
          <div className="brand-name">Velvet & Crumbs</div>
        </div>

        <nav className="main-nav">
          <a href="#">Home</a>
          <a href="#menu">Menu</a>
          <a href="#popular">Popular</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </nav>

        <div className="header-actions">
          <button className="btn btn-primary">Order Now</button>
          <button className="hamburger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <a href="#">Home</a>
        <a href="#menu">Menu</a>
        <a href="#popular">Popular</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <button className="btn btn-outline">Order Now</button>
      </div>
    </header>
  )
}
