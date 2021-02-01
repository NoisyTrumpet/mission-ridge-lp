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
      title="Mission Ridge Range & Academy DFW | Plano Gun Range"
      description="Mission Ridge Range & Academy in Plano, Texas is opening soon to the public! Sign up to stay updated on DFW’s premiere gun range for all shooters."
    />
    <Hero />
    <Signup />
    <Picture />
    <Facility />
    <Contact />
  </Layout>
)

export default IndexPage
