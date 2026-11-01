import { faFacebook, faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import SocialLink from "./SocialLink"

const Nav = () => {
  const socialLinks = [
    { link: "https://github.com/antonioortegajr", icon: faGithub, label: "GitHub" },
    { link: "https://www.linkedin.com/in/antonioortegajr/", icon: faLinkedin, label: "LinkedIn" },
    { link: "https://facebook.com/antonioortegajr", icon: faFacebook, label: "Facebook" },
    { link: "https://twitter.com/antonioortegajr", icon: faTwitter, label: "Twitter" },
  ]

  return (
    <nav>
      <ul>
        {socialLinks.map((social, index) => (
          <SocialLink
            key={social.link}
            link={social.link}
            icon={social.icon}
            label={social.label}
            isFirst={index === 0}
            isLast={index === socialLinks.length - 1}
          />
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
          margin-bottom: 35px;
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
}

export default Nav

