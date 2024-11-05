import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

const links = [
  { href: 'https://github.com/antonioortegajr', label: 'GitHub', num: 0 },
  {href: 'https://twitter.com/antonioortegajr', label: 'twitter', num: 1 },
  { href: 'https://facebook.com/antonioortegajr', label: 'facebook', num: 2 },
  { href: 'https://www.linkedin.com/in/antonioortegajr/', label: 'linkedin', num: 3 },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const iconsArray = [faGithub, faTwitter, faFacebook, faLinkedin]
const Nav = () => (
  <nav>
    <ul>
      {links.map(({ key, href, label, num}) => (
        <li key={key}>
          <a className="rainbow-hover" href={href}><FontAwesomeIcon width={20} height={20} icon={ iconsArray[num] } /> {label}</a>
        </li>
      ))}
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
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
      a:hover{
        background: red;
        background: -webkit-linear-gradient(left, red, orange , yellow, green, cyan, blue, violet);
        background: -o-linear-gradient(right, red, orange, yellow, green, cyan, blue, violet);
        background: -moz-linear-gradient(right, red, orange, yellow, green, cyan, blue, violet);
        background: linear-gradient(to bottom right, #b827fc 10%, #2c90fc 35%, #b8fd33 70%, #fec837 85%, #fd1892 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
      }
    `}</style>
  </nav>
)

export default Nav
