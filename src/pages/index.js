import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import Scroll from '../components/Scroll'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
    library.add(fab)
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Clampy-js multiline ellipsis truncation library" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="about" className="main">
            <div className="spotlight">
              <div className="content">
                <p>
                  Clampy-js is a simple but yet effective library to truncate
                  multiline of text by adding an ellipsis at the end.
                </p>
                <p>
                  Available in all your favorite UI frameworks... and vanilla JS
                  too!
                </p>
              </div>
            </div>
            <ul className="features">
              <li>
                <Scroll type="id" element="js">
                  <a>
                    <FontAwesomeIcon
                      size="10x"
                      fixedWidth
                      icon={['fab', 'js']}
                      style={{ color: '#F0DB4F' }}
                    />
                  </a>
                </Scroll>
              </li>
              <li>
                <Scroll type="id" element="angular">
                  <a>
                    <FontAwesomeIcon
                      size="10x"
                      fixedWidth
                      icon={['fab', 'angular']}
                      style={{ color: '#DD0031' }}
                    />
                  </a>
                </Scroll>
              </li>
              <li>
                <Scroll type="id" element="react">
                  <a>
                    <FontAwesomeIcon
                      size="10x"
                      fixedWidth
                      icon={['fab', 'react']}
                      style={{ color: '#61dafb' }}
                    />
                  </a>
                </Scroll>
              </li>
              <li>
                <Scroll type="id" element="vue">
                  <a>
                    <FontAwesomeIcon
                      size="10x"
                      fixedWidth
                      icon={['fab', 'vuejs']}
                      style={{ color: '#4fc08d' }}
                    />
                  </a>
                </Scroll>
              </li>
            </ul>
          </section>

          <section id="js" className="main special">
            <FontAwesomeIcon
              size="10x"
              fixedWidth
              icon={['fab', 'js']}
              style={{ color: '#F0DB4F' }}
            />
            <h3>Clampy for Vanilla JS</h3>
            <p>
              Not using using a modern UI framework/library? No problem! Use
              Clampy in Vanilla javascript.
            </p>
            <a
              href="https://github.com/clampy-js/clampy/blob/master/README.md"
              className="button"
            >
              Learn More
            </a>
          </section>

          <section id="angular" className="main special">
            <FontAwesomeIcon
              size="10x"
              fixedWidth
              icon={['fab', 'angular']}
              style={{ color: '#DD0031' }}
            />
            <h3>ngx-clampy directive for Angular</h3>
            <p>
              Using Angular (2+)? Clampy-js has an Angular directive that wraps
              all the same functionality whit even more features.
            </p>
            <a
              href="https://github.com/clampy-js/ngx-clampy/blob/master/README.md"
              className="button"
            >
              Learn More
            </a>
          </section>

          <section id="react" className="main special">
            <FontAwesomeIcon
              size="10x"
              fixedWidth
              icon={['fab', 'react']}
              style={{ color: '#61dafb' }}
            />
            <h3>react-clampy component for React</h3>
            <p>
              Using React? Clampy-js has a React component that you can use to
              wrap the text you need to truncate.
            </p>
            <a
              href="https://github.com/clampy-js/react-clampy/blob/master/README.md"
              className="button"
            >
              Learn More
            </a>
          </section>
          <section id="vue" className="main special">
            <FontAwesomeIcon
              size="10x"
              fixedWidth
              icon={['fab', 'vuejs']}
              style={{ color: '#4fc08d' }}
            />
            <h3>Vue.js</h3>
            <p>
              Using Vue? Clampy-js has a Vue directive that you can use. You can
              also override all default options globally.
            </p>
            <a
              href="https://github.com/clampy-js/vue-clampy/blob/master/README.md"
              className="button"
            >
              Learn More
            </a>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
