import React from 'react'
import Head from 'next/head'
import Nav from '../components/Nav'
import ProfilePic from '../components/ProfilePic'
import Card from '../components/Card'
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
        <ProfilePic img='/me.jpg'/>
        <code id='bunny' className="rainbow">
        |￣￣￣￣￣￣|<br/>
        |    What&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br/>
        |    Do&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <br/>
        |  I DO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br/>
        |＿＿＿＿＿_|<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|| <br/>
        (\__/)&nbsp;|| <br/>
        (•ㅅ•) ||<br/>
        / 　 づ<br/>
        </code>
      </div>
      <h1 className='title'>Antonio Ortega Jr</h1>
      <p className='description'>
        I am an AI engineer at <a className="rainbow" href="https://www.propertyradar.com/">Property Radar</a> living in Eugene Oregon.
      </p>
      <p className='description'>
        I write code things and use things for code like aws. I also volunteer for code things.
      </p>
      <div className='row'>
        <Card
          href='https://eugenewebdevs.com'
          title='Eugene Web Devs '
          description='I am the organizer for a local web developers meetup'
        />
        <Card
          href='https://hackforacause.org'
          description='Contributing organizer of local civic themed hackathon.'
          title='Hack for a Cause '
        />
        <Card
          href='https://github.com/antonioortegajr'
          title='Code On GitHub '
          description='My code fun on '
          icon={faGithub}
        />
      </div>
      <h2>About Me: </h2>
      <div className='row'>
          <p>
          I started coding on a Commodore 64 when I was a kid. I continue to learn and help others learn about technologies. I host a monthly meet up here in Eugene, OR and speak about tech around town. I work remotely as a senior engineer.
          </p>
      </div>
      <h2>Tools I use often: </h2>
      <div className='row'>
          <p>
            I use these tools often in my job, and my side projects. 
            I use many other technologies, but these seem to the the ones I use the most often at the moment. 
            I enjoy experimenting with many other kinds of technologies as well like mobile apps and AI.
          </p>
      </div>
      <div id="tech-icons" className='row'>
          <FontAwesomeIcon width={50} height={50} icon={ faAws } />
          <FontAwesomeIcon width={50} height={50} icon={ faGitAlt } />
          <FontAwesomeIcon width={50} height={50} icon={ faJs } />
          <FontAwesomeIcon width={50} height={50} icon={ faPython } />
          <FontAwesomeIcon width={50} height={50} icon={ faDocker } />
      </div>
      <h2>When I am not coding: </h2>
      <div className='row'>
          <p>
            You can find me at the local comic book shop or watching sports. I often am speaking about tech as well. 
            Here is my <a className="rainbow" href="https://www.youtube.com/watch?v=WVpzpXgt7TA">latest talk on YouTube</a>. 
            If you have been to one of a Eugene Web Devs event and want to get in contact with me, use one of the social links at the top of the page. 
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
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      #hero-images {
        padding-left:10%;
        float: left;
        width: 100%;
      }
      #bunny {
        float:right;
        width: 200px;
        padding-right:15%;
        color: #c5c3c9
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
      @media only screen and (max-width: 600px) {
        #bunny {
          float: right;
          padding-right: 0%;
          width: 40%;
        }
      }
      @media only screen and (max-width: 337px) {
        #bunny {
          float: right;
          padding-right: 0%;
        }
      @media only screen and (max-width: 320px) {
        #bunny {
          display: none;
        }
      }
    `}</style>
  </div>
)

export default Home
