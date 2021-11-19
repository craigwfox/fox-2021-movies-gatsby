import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => (
  <Layout>
    <Seo title="🦊 About Craig " />
    <h1>About Craig</h1>
    <p>
      I'm a front-end developer and I make websites there using HTML, CSS, and
      Javascript.
    </p>
    <h2>Things I work with</h2>
    <ul>
      <li>Vue, Vite, Nuxt</li>
      <li>WordPress</li>
      <li>React, Gatsby</li>
    </ul>
  </Layout>
)

export default About
