import React from "react"

import Layout from "../components/layout"
import { Hero } from "../components/Hero"
import { Signup } from "../components/Signup"
import { Contact } from "../components/Contact"
import { Picture } from "../components/Picture"
import { Facility } from "../components/Facility"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="North Texas' Premier Shooting Range & Event Center"
    />
    <Hero />
    <Signup />
    <Picture />
    <Facility />
    <Contact />
  </Layout>
)

export default IndexPage
