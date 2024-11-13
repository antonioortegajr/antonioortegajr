import React from 'react'
import Head from 'next/head'
import Nav from '../components/Nav'
import Script from 'next/script'
const Four = () => (
    <div>
        <Head>
            <html lang='lang="en-US"' />
            <title>404 Antonio Ortega Jr</title>
            <link rel='icon' href='/favicon.ico' />
            <meta name='description' content='Antonio Ortega Jr. site 404.' />
        </Head>
        <Nav />
        <div id="page-message">
        <div className="error-icon">🚀</div>
            <h1>404</h1>
            <p>Oops! Looks like you're lost in space.</p>
            <p>The page you're looking for isn't here.</p>
            <a href="/" class="back-button">Go Back Home</a>
            <img src="https://aibadge.org/badges/made-with-ai-blue-green.svg" style={{maxWidth: '75px', marginTop: '20px'}} alt="404" />
            <p>This lame 404 page was generated via ChatGPT.</p>
            <p>Our jobs are safe.</p>
            <style jsx>{`
            #page-message {
                    margin: 0;
                    padding: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    height: 100vh;
                    background-color: #15202b;
                    color: #ffffff;
                    font-family: Arial, sans-serif;
                    text-align: center;
                }
                h1 {
                    font-size: 3em;
                    margin: 0;
                }
                p {
                    font-size: 1.2em;
                    margin: 10px 0;
                }
                .error-icon {
                    font-size: 4em;
                    margin-bottom: 20px;
                }
                .back-button {
                    text-decoration: none;
                    padding: 10px 20px;
                    background-color: #1da1f2;
                    color: #ffffff;
                    border-radius: 5px;
                    font-size: 1em;
                    transition: background-color 0.3s ease;
                }
                    .back-button:hover {
                    background-color: #0d8dd4;
                } 
                a {
                    
                    text-decoration: none;
                    color: #067df7;
                }    
            `}</style>
        </div>
    </div>
)

export default Four