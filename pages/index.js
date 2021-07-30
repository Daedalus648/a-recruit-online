import React from 'react'
import Head from 'next/head'
import ReactPlayer from 'react-player'
import AnimatedCustomButton from '../components/others/animated_button'
import Footer from '../components/footer/footer'
import Header from '../components/header/home_header'

export default function Home() {
  return (
    <>
      <Head>
        <title>A recruit | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://appsforoffice.microsoft.com/lib/1/hosted/Office.js" type="text/javascript"></script>


      </Head>

      
      <main className="Home">
        <Header/>
        <section className={"HomeImageBackground scroll"}>
          <div className="blure  orientationV">
            {/* <div className="robot"></div> */}
            {/* <Header/> */}

            <div className="center textZone">
            </div>

            <div className="linkZone orientationH spaceBetween">
              <AnimatedCustomButton
                text="JE CHERCHE UN TALENT"
                link="/authentification/connexion"
                data="recruteur"
              />
              <AnimatedCustomButton
                text="JE CHERCHE UN EMPLOIE"
                link="/authentification/connexion"
                data="candidat"
              />
            </div> 

            <div className="arrow"></div>

          </div>     
        </section>


      </main>

      <Footer/>


     
    </>
  )
}
