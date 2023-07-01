import * as React from "react"
import * as indexStyles from "../styles/index.module.css"
import 'animate.css';

import Trails from "../components/trails"
import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <main>
      <div className="introDiv">
        <div>
          <nav>
            <a href="#support">{`(`}support{`)`}</a>
            <a href="#about">{`(`}about{`)`}</a>
          </nav>
        </div>
        <div>
          <h1 className={`animate__animated animate__fadeInDown ${indexStyles.fadeInDown} ${indexStyles.logoStyle}`}>Mystic Mind</h1>
          <p className={`animate__animated animate__fadeIn animate__delay-1s ${indexStyles.fadeIn} ${indexStyles.tagline}`}>The premier AI solution for generating RPG content</p>
          <a className={indexStyles.discordButton} href="https://discord.gg/gpFPdVxuYq" target="_blank" rel="noreferrer">Join us on Discord</a>
        </div>
        <div />
      </div>

      <h2 id="about">About</h2>
      <p>Mystic Mind is the premier AI solution for generating any RPG content you wish. Create spells, items, monsters, and more with a single command.</p>
      <p>We are a small team that is focused on delivering unique solutions for the RPG community.</p>
      <div className={indexStyles.sectionSpacer}></div>

      <h2 id="support">Support</h2>
      <p>For help, questions, or inquiries, please <a href="https://discord.gg/gpFPdVxuYq" target="_blank" rel="noreferrer">visit our Discord</a> for more information.</p>
      <div className={indexStyles.sectionSpacer}></div>

      <Footer />
      <Trails />
    </main>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <html lang="en" />
    <title>Mystic Mind</title>
    <meta name="description" content="Mystic Mind is the premier AI solution for RPG content." />
  </>
)
