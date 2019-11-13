import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = props => (
  <nav id="nav" className={props.sticky ? 'alt' : ''}>
    <Scrollspy
      items={['about', 'first', 'second', 'cta']}
      currentClassName="is-active"
      offset={-300}
    >
      <li>
        <Scroll type="id" element="about">
          <a href="#">About</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="js">
          <a href="#">JS</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="angular">
          <a href="#">Angular</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="react">
          <a href="#">React</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="vue">
          <a href="#">Vue</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="footer">
          <a href="#">Donation</a>
        </Scroll>
      </li>
      <li>
        <a
          href="https://github.com/clampy-js"
          target="_blank"
          className="icon fa-github alt"
          style={{ color: '#333' }}
        >
          {/* <span className="label">GitHub</span> */}
        </a>
      </li>
    </Scrollspy>
  </nav>
)

export default Nav
