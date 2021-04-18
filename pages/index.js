import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faTwitter,
  faAws,
  faJs,
  faVuejs,
  faPhp,
  faDocker,
  faGitAlt,
  faGithub,
  faMeetup
} from '@fortawesome/free-brands-svg-icons'

const Home = () => (
  <div>
    <Head>
      <title>Antonio Ortega Jr</title>
      <link rel='icon' href='/favicon.ico' />
      <meta name='description' content='Antonio Ortega Jr. I write code and use things like aws.' />
    </Head>
    <Nav />

    <div className='hero'>
      <div id='hero-images'>
        <img id='me' src='/me.jpg'  alt='my-face' />
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
        I am an engineer at <a className="rainbow" href="https://twentyideas.com">Twenty Ideas</a> in Eugene Oregon.
      </p>
      <p className='description'>
        I write code things and use things for code like aws. I also volunteer for code things.
      </p>
      <div className='row'>
        <a href='https://eugenewebdevs.com' className='card'>
          <h3>Eugene Web Devs &rarr;</h3>
          <p>I am the organizer for a local web developers meetup <FontAwesomeIcon width={20} height={20} icon={ faMeetup } />.</p>
        </a>
        <a href='https://hackforacause.org' className='card'>
          <h3>Hack for a Cause &rarr;</h3>
          <p>Contributing organizer of local civic themed hackathon.</p>
        </a>
        <a
          href='https://github.com/antonioortegajr'
          className='card'
        >
          <h3>Code On GitHub &rarr;</h3>
          <p>My code fun on <FontAwesomeIcon width={20} height={20} icon={ faGithub } />.</p>
        </a>
      </div>
      <h2>About Me: </h2>
      <div className='row'>
          <p>
            I started coding on a Commodore 64 when I was a kid. I continue to learn and help others learn about technologies.
            I host a monthly meet up here in Eugene, OR and speak about tech around town. I work as an engineer at a real estate data company.
          </p>
      </div>
      <h2>Tools I use often: </h2>
      <div className='row'>
          <p>
            I use these tools often in my job, and my side projects. 
            I use many other technologies, but these seem to the the ones I use the most often. 
            I like to experiment with many kinds of technologies as well (this site is Next.js/React.js). 
          </p>
      </div>
      <div id="tech-icons" className='row'>
          <FontAwesomeIcon width={50} height={50} icon={ faAws } />
          <FontAwesomeIcon width={50} height={50} icon={ faGitAlt } />
          <FontAwesomeIcon width={50} height={50} icon={ faJs } />
          <FontAwesomeIcon width={50} height={50} icon={ faVuejs } />
          <FontAwesomeIcon width={50} height={50} icon={ faDocker } />
          <FontAwesomeIcon width={50} height={50} icon={ faPhp } />
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
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        min-height: 100px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 3px solid #9b9b9b;
      }
      .card:hover {
        border: 3px solid transparent;
        border-image: linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%);
        border-image-slice: 1;
      }
      .card h3 {
        margin: 0;
        color: #1b5982;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
      #hero-images {
        padding-left:10%;
        float: left;
        width: 100%;
      }
      #me {
        float:left;
        max-width: 270px;
        border-radius: 50%;
        border: none;
        margin:0;
        padding:0;
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
      @media only screen and (max-width: 600px) {
        #me {
          padding-right: 10px;
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
