import React from "react"

import Layout from "../components/layout"
import { Hero } from "../components/Hero"
import { Signup } from "../components/Signup"
import { Contact } from "../components/Contact"
import { Picture } from "../components/Picture"
import { Facility } from "../components/Facility"

const IndexPage = () => (
  <Layout>
    <Hero />
    <Signup />
    <Picture />
    <Facility />
    <Contact />
  </Layout>
)

export default IndexPage
