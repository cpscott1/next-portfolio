import React, { useState } from 'react'
import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Layout from '../components/Layout.js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

export default function Home() {
  const [click, setClick] = useState(false)

const handleClick = () => setClick(!click)
const closeMobileMenu = () => setClick(false)

  return (
    <Layout>
      <main>
        <img src="img/header.jpeg" className="header-photo" />
        <h2 className="home-title">Hey, I'm Cam Perry and I enjoy building web applications</h2>
        <div style={{ animationDuration: '2s' }} className="button-container">
          <button className="about-button">ABOUT ME</button>
        </div>
        <div className="image-container">
          <img src="img/port-photo.JPG" className="port-photo" />
        </div>
        <div className="about-section">
          <h2>About Me</h2>
          <p>I'm an innovative Front-end developer with proven success in building responsive
          websites and applications. Demonstrated expertise in translating complex
          business requirements into optimized web-based solutions. Effective in leading
          high-performing teams and managing development projects to
          completion. Proficient in Shopify, React.js, HTML, JavaScript, and CSS.</p>
          <div className="button-container">
            <button className="portfolio-button"><Link href="/portfolio">GO TO PORTFOLIO</Link></button>
          </div>
        </div>
      </main>
    </Layout>
  )
}
