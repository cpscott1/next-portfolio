import React, { useState } from 'react'
import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link";
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;


export default function Layout(props) {
  const [click, setClick] = useState(false)

const handleClick = () => setClick(!click)
const closeMobileMenu = () => setClick(false)

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header">
        <div className="logo">
          <Link href="/">
            Cam Perry
          </Link>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FontAwesomeIcon className="icon" icon={faTimes} /> : <FontAwesomeIcon className="icon" icon={faBars} />}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="links-item">
                <Link href="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="links-item">
                <Link href="/portfolio" className="nav-links" onClick={closeMobileMenu}>
                  Portfolio
                </Link>
              </li>
              <li className="links-item">
                <Link href="/contact" className="nav-links" onClick={closeMobileMenu}>
                  Contact Me
                </Link>
              </li>
            </ul>
        </div>
      </header>
      {/* this is where the content area goes */}
      {props.children}
      <footer>
        <Link href="/"><a className="footer-links">HOME</a></Link>
        <Link href="/portfolio"><a className="footer-links">PORTFOLIO</a></Link>
        <Link href="/contact"><a className="footer-links">CONTACT ME</a></Link>
        <div>
          <a href="https://github.com/cpscott1"><FontAwesomeIcon className="footer-icon" icon={faGithub} /></a>
          <a href="https://twitter.com/camperry21"><FontAwesomeIcon className="footer-icon" icon={faTwitter} /></a>
          <a href="https://www.linkedin.com/in/camperry1/"><FontAwesomeIcon className="footer-icon" icon={faLinkedinIn} /></a>
        </div>
      </footer>
    </div>
  )
}
