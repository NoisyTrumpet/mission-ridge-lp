import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"

import BackgroundImage from "gatsby-background-image"
import { Animated } from "react-animated-css"
import HeroForm from "../HeroForm/HeroForm"
import "./Hero.scss"

const Hero = () => {
  const placeHolderImage = useStaticQuery(
    graphql`
    query {
      placeholderImage: file(relativePath: { eq: "hero.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1920,
            placeholder: BLURRED,
            formats: [AUTO, WEBP, AVIF, PNG]
          )
        }
      }
    }
`
  )

  const image = getImage(placeHolderImage.placeholderImage)
  const bgImage = convertToBgImage(image)

  const backgroundFluidImageStack = [
    bgImage.fluid,
    `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2))`,
  ].reverse()

  return (
    <section className="hero">
      <BackgroundImage
        Tag="div"
        className="hero-image"
        fluid={backgroundFluidImageStack}
        preserveStackingContent
      >
        <section className="hero-form-section">
          <HeroForm />
        </section>
        <section className="hero-content">
          <Animated
            animationIn="fadeInUp"
            animationOut="fadeOutDown"
            isVisible={true}
          >
            <h3> Coming Soon Spring 2021!</h3>
          </Animated>
          <Animated
            animationIn="fadeInUp"
            animationOut="fadeOutDown"
            isVisible={true}
          >
            <h1>North Texas' Premier Shooting Range & Event Center</h1>
          </Animated>
        </section>
      </BackgroundImage>
    </section>
  )
}

Hero.defaultProps = {}

Hero.propTypes = {}

export default Hero
