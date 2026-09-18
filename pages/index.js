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
          href='https://github.com/Hack4Eugene'
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
          <svg
            aria-hidden="true"
            focusable="false"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            style={{ fontSize: '3em', height: '1em', width: '1em' }}
            fill="currentColor"
          >
            <path d="m19.6 66.5 19.7-11 .3-1-.3-.5h-1l-3.3-.2-11.2-.3L14 53l-9.5-.5-2.4-.5L0 49l.2-1.5 2-1.3 2.9.2 6.3.5 9.5.6 6.9.4L38 49.1h1.6l.2-.7-.5-.4-.4-.4L29 41l-10.6-7-5.6-4.1-3-2-1.5-2-.6-4.2 2.7-3 3.7.3.9.2 3.7 2.9 8 6.1L37 36l1.5 1.2.6-.4.1-.3-.7-1.1L33 25l-6-10.4-2.7-4.3-.7-2.6c-.3-1-.4-2-.4-3l3-4.2L28 0l4.2.6L33.8 2l2.6 6 4.1 9.3L47 29.9l2 3.8 1 3.4.3 1h.7v-.5l.5-7.2 1-8.7 1-11.2.3-3.2 1.6-3.8 3-2L61 2.6l2 2.9-.3 1.8-1.1 7.7L59 27.1l-1.5 8.2h.9l1-1.1 4.1-5.4 6.9-8.6 3-3.5L77 13l2.3-1.8h4.3l3.1 4.7-1.4 4.9-4.4 5.6-3.7 4.7-5.3 7.1-3.2 5.7.3.4h.7l12-2.6 6.4-1.1 7.6-1.3 3.5 1.6.4 1.6-1.4 3.4-8.2 2-9.6 2-14.3 3.3-.2.1.2.3 6.4.6 2.8.2h6.8l12.6 1 3.3 2 1.9 2.7-.3 2-5.1 2.6-6.8-1.6-16-3.8-5.4-1.3h-.8v.4l4.6 4.5 8.3 7.5L89 80.1l.5 2.4-1.3 2-1.4-.2-9.2-7-3.6-3-8-6.8h-.5v.7l1.8 2.7 9.8 14.7.5 4.5-.7 1.4-2.6 1-2.7-.6-5.8-8-6-9-4.7-8.2-.5.4-2.9 30.2-1.3 1.5-3 1.2-2.5-2-1.4-3 1.4-6.2 1.6-8 1.3-6.4 1.2-7.9.7-2.6v-.2H49L43 72l-9 12.3-7.2 7.6-1.7.7-3-1.5.3-2.8L24 86l10-12.8 6-7.9 4-4.6-.1-.5h-.3L17.2 77.4l-4.7.6-2-2 .2-3 1-1 8-5.5Z" />
          </svg>
          <FontAwesomeIcon size="3x" icon={ faJs } />
          <FontAwesomeIcon size="3x" icon={ faPython } />
          <FontAwesomeIcon size="3x" icon={ faDocker } />
      </div>
      <h2>AI Integration</h2>
      <div className='row'>
          <p>
            As a software engineer I am focused on making AI help with and do real work. I spend my time connecting models from OpenAI and Claude to build real integrations, designing the guardrails that keep things safe and reliable. I love building those agentic systems, and seeing the real word productivity gains, I get hands-on running local models on small hardware. It keeps me constantly curious about where AI is headed.
          </p>
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
    `}</style>
  </div>
)

export default Home
