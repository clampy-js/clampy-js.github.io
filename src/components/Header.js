import React from 'react'

import logo from '../assets/images/logo.png'

const Header = props => (
  <header id="header" className="alt">
    <span className="logo">
      <img src={logo} alt="" />
    </span>
    <h1>Clampy-js</h1>
    <p>
      A multiline ellipsis truncation library
      <br />
      available in all your favorite UI frameworks... and vanilla JS too!
    </p>
  </header>
)

export default Header
