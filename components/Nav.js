import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import SocialLink from './SocialLink'

const iconsArray = [faGithub, faTwitter, faFacebook, faLinkedin]
const Nav = () => (
  <nav>
    <ul>
    <SocialLink link='https://github.com/antonioortegajr' icon={faGithub} />
    <SocialLink link='https://www.linkedin.com/in/antonioortegajr/' icon={faLinkedin} />
    <SocialLink link='https://facebook.com/antonioortegajr'icon={faFacebook} />
    <SocialLink link='https://twitter.com/antonioortegajr' icon={faTwitter} />

    </ul>
    <style jsx>{`
      :global(body) {
        min-width: 300px;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
          background-color: #15202b;
          padding-left: 10px;
          padding-right: 10px;
      }
      nav {
        text-align: center;
        margin-bottom:35px;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
    `}</style>
  </nav>
)

export default Nav
