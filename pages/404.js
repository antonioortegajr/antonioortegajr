import React from 'react'
import Head from 'next/head'
import Nav from '../components/Nav'
import Script from 'next/script'

const Four = () => (
    <div>
        <Head>
            <html lang='lang="en-US"' />
            <title>Antonio Ortega Jr 404</title>
            <link rel='icon' href='/favicon.ico' />
            <meta name='description' content='Antonio Ortega Jr. site 404.' />
        </Head>
        <Nav />
        <h1>404</h1>
        <Script src="/static/script.js" />
        <style jsx>{`
            
        `}</style>
    </div>
)

export default Four