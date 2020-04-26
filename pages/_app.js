import Head from 'next/head'
import '../utils/styles/global.css'

export default function App({Component,pageProps}) {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"></link>
                <link href="https://unpkg.com/nes.css@2.3.0/css/nes.min.css" rel="stylesheet" />
            </Head>
            <Component {...pageProps}/>
        </>
    )
}
