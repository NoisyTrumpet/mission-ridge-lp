import React from "react"

import Layout from "../components/layout"
import { Hero } from "../components/Hero"
import { Contact } from "../components/Contact"
import { Picture } from "../components/Picture"
import { Facility } from "../components/Facility"
import { ImageSlider } from "../components/ImageSlider"

const IndexPage = () => {
  return (
    <Layout>
    <Hero />
    {/* <Signup /> */}
    <Picture />
    <Facility />
    <ImageSlider />
    <Contact />
  </Layout>
  )
}

export default IndexPage
