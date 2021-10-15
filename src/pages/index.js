import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { Hero } from "../components/Hero"
import { Contact } from "../components/Contact"
import { Picture } from "../components/Picture"
import { Facility } from "../components/Facility"
import RangePricing from "../components/RangePricing"
import TrainingAcademy from "../components/TrainingAcademy"
import { ImageSlider } from "../components/ImageSlider"
import Events from "../components/Events"
import Family from "../components/Family"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Hero />
      <Picture />
      <Facility />
      {/* Update October 2021 */}
      <RangePricing />
      <ImageSlider />
      <Events
        title="What's New At MRRA"
        details="Keep up to date on everything happening at Mission Ridge Range & Academy including firearm & archery dealer days, promotions and events!"
        image={data.eventsImage.childImageSharp}
      />
      <Family image={data.familyImage.childImageSharp} />
      <TrainingAcademy
        title="Training Academy Coming Soon!"
        image={data.trainingImage.childImageSharp}
      />
      {/* Update October 2021 */}
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
    eventsImage: file(relativePath: { eq: "upcoming-events.jpg" }) {
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
    familyImage: file(relativePath: { eq: "team-member-interaction.jpg" }) {
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
