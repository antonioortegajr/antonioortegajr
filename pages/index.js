import React from 'react'
import Head from 'next/head'
import Nav from '../components/Nav'
import ProfilePic from '../components/ProfilePic'
import Card from '../components/Card'
import RainbowBunny from '../components/RainbowBunny'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAws,
  faJs,
  faPython,
  faDocker,
  faGitAlt,
  faGithub,
  faMeetup
} from '@fortawesome/free-brands-svg-icons'

const Home = () => (
  <div>
    <Head>
      <html lang='lang="en-US"' />
      <title>Antonio Ortega Jr</title>
      <link rel='icon' href='/favicon.ico' />
      <meta name='description' content='Antonio Ortega Jr. I write code and use things like aws.' />
    </Head>
    <Nav />

    <div className='hero'>
      <div id='hero-images'>
        <ProfilePic img='/me_ivy.png'/>
        <RainbowBunny />
      </div>
      <h1 className='title'>Antonio Ortega Jr</h1>
      <p className='description'>
I am an Applications Reliability Engineer at <a className="rainbow" href="https://natera.com">Natera</a>, living in Eugene, Oregon.
      </p>
      <p className='description'>
        I write code and use cloud technologies like AWS. I also volunteer for code things.
      </p>
      <div className='row'>
        <Card
          href='https://eugenewebdevs.com'
          title='Eugene Web Devs '
          description='I am the organizer for a local web developer meetup.'
          icon={faMeetup}
        />
        <Card
          href='https://hackforacause.org'
          description='I am a contributing organizer for a local civic-themed hackathon.'
          title='Hack for a Cause '
        />
        <Card
          href='https://github.com/antonioortegajr'
          title='Code On GitHub '
          description='My code fun on '
          icon={faGithub}
        />
      </div>
      <h2>About Me</h2>
      <div className='row'>
          <p>
          I started coding on a Commodore 64 as a kid. I enjoy learning and helping others learn about technology. I host a monthly meetup in Eugene, OR, speak about tech around town, and work remotely as a senior engineer.
          </p>
      </div>
      <h2>Tools I Use Often</h2>
      <div className='row'>
          <p>
            I use these tools often in my job and side projects. While I use many other technologies, these are the ones I use most frequently at the moment. I also enjoy experimenting with other technologies like mobile apps and AI.
          </p>
      </div>
      <div id="tech-icons" className='row'>
          <FontAwesomeIcon size="3x" icon={ faAws } />
          <FontAwesomeIcon size="3x" icon={ faGitAlt } />
          <FontAwesomeIcon size="3x" icon={ faJs } />
          <FontAwesomeIcon size="3x" icon={ faPython } />
          <FontAwesomeIcon size="3x" icon={ faDocker } />
      </div>
      <h2>When I'm Not Coding</h2>
      <div className='row'>
          <p>
            You can find me at the local comic book shop or watching sports. I also speak about tech, and you can find my latest talk on YouTube. If you have been to a Eugene Web Devs event and want to get in contact with me, use one of the social links at the top of the page. 
          </p>
      </div>
    </div>
    <style jsx>{`
      h1, h2, p, .row, #hero-images, #tech-icons{
        max-width: 80%;
        color: #c5c3c9 !Important;
      }
      .hero {
        min-width: 100% !Important;
        padding-top:20px;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
        min-width: 100%;
      }
      .title,
      .description {
        text-align: center;
        width: 100%;
        margin: 10px auto 40px;
      }
      .row, h2{
        max-width: 880px;
        margin: 60px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      #hero-images {
        padding-left:10%;
        float: left;
        width: 100%;
      }
      .rainbow{
        background: red;
        background: -webkit-linear-gradient(left, red, orange , yellow, green, cyan, blue, violet);
        background: -o-linear-gradient(right, red, orange, yellow, green, cyan, blue, violet);
        background: -moz-linear-gradient(right, red, orange, yellow, green, cyan, blue, violet);
        background: linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
      }
    `}</style>
  </div>
)

export default Home
