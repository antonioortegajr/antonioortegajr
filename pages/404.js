import React from 'react'
import Head from 'next/head'
import Nav from '../components/Nav'
import SadBunny from '../components/SadBunny'
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
        <SadBunny />
            <h1>404</h1>
            <p>The bunny looked everywhere. This page is not here.</p>
            <p className="hint">(pet the bunny)</p>
            <a href="/" className="back-button">Go Back Home</a>
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
            `}</style>
        </div>
    </div>
)

export default Four