import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Layout from '../components/Layout.js'
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="container">
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <main>
      <div className="port-grid">
        <div className="project-image-container">
          <img className="twodivs" src="img/twodivsite2.jpg" />
        </div>
        <div className="projects-text-container">
          <h2 className="projects-title">Between Two Divs</h2>
          <p className="projects-text">This project required me to create a fully responsive web design for my podcast. I used React, CSS and AWS to deploy the site.</p>
          <div className="projects-button-container">
            <button className="projects-button"><a href="https://www.betweentwodivs.com">VIEW PROJECT</a></button>
          </div>
        </div>
      </div>
        <div className="port-grid reverse">
          <div className="project-image-container images">
            <img className="twodivs" src="img/twodivsstore.jpg" />
          </div>
          <div className="projects-text-container">
            <h2 className="projects-title">Two Divs Store</h2>
            <p className="projects-text">This project I created a store to sell podcast merchandise for the Between Two Divs podcast. I used Shopify, Liquid, and CSS for the site.</p>
            <div className="projects-button-container">
              <button className="projects-button"><a href="https://twodivsstore.com">VIEW PROJECT</a></button>
            </div>
          </div>
        </div>

        <div className="port-grid">
          <div className="project-image-container images">
            <img className="twodivs" src="img/scissortail2.jpg" />
          </div>
          <div className="projects-text-container scissortail">
            <h2 className="projects-title">Scissortail Energy Partners</h2>
            <p className="projects-text">Implemented the designs given by the client to create a fresh looking landing page. I used Gatbsy, React and CSS grid for the site.</p>
            <div className="projects-button-container">
              <button className="projects-button"><a href="https://scissortailep.com">VIEW PROJECT</a></button>
            </div>
          </div>
        </div>

        <div className="port-grid reverse">
          <div className="project-image-container images ">
            <img className="twodivs" src="img/guidr.jpg" />
          </div>
          <div className="projects-text-container">
            <h2 className="projects-title">Guidr</h2>
            <p className="projects-text">Worked on a small team and was delegated the task to work on the landing page. I used HTML, CSS and vanilla JS to create the carousel.</p>
            <div className="projects-button-container">
              <button className="projects-button"><a href="https://guidr-pt.github.io/guidr-UI">VIEW PROJECT</a></button>
            </div>
          </div>
        </div>

        <div className="home-contact">
          <h2 className="home-contact-title">Interested in doing a project</h2>
          <div className="contact-container">
            <button className="contact-button"><Link href="/contact">CONTACT ME</Link></button>
          </div>
        </div>
      </main>
      </Layout>
    </div>
  )
}
