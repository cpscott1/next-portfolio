import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Layout from '../components/Layout.js'

export default function Contact() {
  return (
    <div className="container">
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <div className="touch-title">
            <h2 className="touch-text">Get in Touch</h2>
            <p>I'd love to hear what you're working on and how I could help. I'm currently looking for a new role and open to a wide range of opportunities. If you found me from my podcast I am also looking for new exciting guests to have on as well. </p>
          </div>
          <div>
            <h2>Contact Me</h2>
            <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="contact-form" value="contact" />
              <div className="input-containers">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Name" />
              </div>
              <div className="input-containers">
                <label htmlFor="email">Email Address</label>
                <input type="text" id="email" name="email" placeholder="email@example.com"/>
              </div>
              <div className="input-containers">
                <label htmlFor="message">Message</label>
                <textarea className="textarea" id="message" name="message" placeholder="How can I help?"/>
              </div>
              <div className="form-button-container">
                <button className="contact-form-button" type="submit">SEND MESSAGE</button>
              </div>
            </form>
          </div>
        </main>
      </Layout>
    </div>
  )
}
