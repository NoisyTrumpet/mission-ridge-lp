import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Hero} from "../components/Hero"


const ThankYou = () => (
  <Layout>
    <SEO title="Thank You!" />
    <div className={"container"}>
    <Hero thankYou />
    </div>
  </Layout>
)

export default ThankYou
