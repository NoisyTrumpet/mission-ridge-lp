import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { Hero } from "../components/Hero"
import { Contact } from "../components/Contact"
import { Picture } from "../components/Picture"
import { Facility } from "../components/Facility"
import RangePricing from "../components/RangePricing"
import TrainingAcademy from "../components/TrainingAcademy"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Hero />
      {/* <Signup /> */}
      <Picture />
      <Facility />
      {/* Update October 2021 */}
      <RangePricing />
      {/* @TODO: Large Retails Store */}
      {/* @TODO: What's New */}
      {/* Join Our Family */}
      <TrainingAcademy
        title="Training Academy Coming Soon!"
        image={data.trainingImage.childImageSharp}
      />
      <Contact />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query pagQuery {
    trainingImage: file(relativePath: { eq: "training-academy.jpg" }) {
      id
      childImageSharp {
        gatsbyImageData(
          quality: 90
          placeholder: BLURRED
          layout: CONSTRAINED
          formats: [WEBP, AVIF]
        )
      }
    }
  }
`
