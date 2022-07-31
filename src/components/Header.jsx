import React from 'react'

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo right">GitHub</a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <a href="#">Search Movie App</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Header
