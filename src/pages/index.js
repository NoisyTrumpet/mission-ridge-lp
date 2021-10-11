import React from "react"

import Layout from "../components/layout"
import { Hero } from "../components/Hero"
import { Contact } from "../components/Contact"
import { Picture } from "../components/Picture"
import { Facility } from "../components/Facility"
import RangePricing from "../components/RangePricing"

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      {/* <Signup /> */}
      <Picture />
      <Facility />
      <RangePricing />
      <Contact />
    </Layout>
  )
}

export default IndexPage
