import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = props => (
  <footer id="footer">
    {/* <section> */}
    <h2>Support this project</h2>
    <p>
      Clampy-js is not free to develop. You can help these supporting these
      projects and say "thank you" by making a small donation:
    </p>
    <ul className="actions">
      <li>
        <a
          href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=EZ3DPQWMXPZW4&source=url"
          className="button"
        >
          <FontAwesomeIcon icon={['fab', 'paypal']} /> Make a donation
        </a>
      </li>
    </ul>
    {/* </section> */}
    {/* <section>
      <h2>Etiam feugiat</h2>
      <dl className="alt">
        <dt>Address</dt>
        <dd>1234 Somewhere Road &bull; Nashville, TN 00000 &bull; USA</dd>
        <dt>Phone</dt>
        <dd>(000) 000-0000 x 0000</dd>
        <dt>Email</dt>
        <dd>
          <a href="https://codebushi.com">information@untitled.tld</a>
        </dd>
      </dl>
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/huntaroSan"
            className="icon fa-twitter alt"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://codebushi.com" className="icon fa-facebook alt">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://codebushi.com" className="icon fa-instagram alt">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/codebushi/gatsby-starter-stellar"
            className="icon fa-github alt"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a href="https://codebushi.com" className="icon fa-dribbble alt">
            <span className="label">Dribbble</span>
          </a>
        </li>
      </ul>
    </section> */}

    <p className="copyright">
      <a href="https://github.com/clampy-js">&copy; Clampy-js</a>
    </p>
  </footer>
)

export default Footer
