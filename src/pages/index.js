import * as React from "react"
import "../styles/index.css"
import 'animate.css';

import Trails from "../components/trails"

const IndexPage = () => {
  return (
    <main>
      <div className="introDiv"></div>
      <h1 className="animate__animated animate__fadeInDown logoStyle">Mystic Mind</h1>
      <a class="discordButton" href="https://discord.gg/GfdNApCcE4" target="_blank">Join us on Discord</a> 
      <div className="introDiv"></div>

      <h2>About</h2>
      <p>Mystic Mind is the premier AI solution for generating any RPG content you wish. Create spells, items, monsters, and more with a single command.</p>
      <p>We are a small team that is focused on delivering unique solutions for the RPG community.</p>
      <div className="sectionSpacer"></div>

      <h2>Support</h2>
      <p>For help, questions, or inquiries, please <a href="https://discord.gg/GfdNApCcE4" target="_blank">visit our Discord</a> for more information.</p>
      <div className="sectionSpacer"></div>

      <Trails />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Mystic Mind</title>
