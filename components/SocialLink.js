import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

const SocialLink = ({link, icon}) => (
    <div>
        <li>
          <a className="rainbow-hover" href={link}><FontAwesomeIcon size='lg' height={20} icon={ icon } /> </a>
        </li>
        <style jsx>{`
            li {
            display: flex;
            padding: 6px 8px;
            }
            a {
                color: #067df7;
                text-decoration: none;
            }
            a:hover {
                color: #fff;
            }
        `}</style>
    </div>

)
export default SocialLink
