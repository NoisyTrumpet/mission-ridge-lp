import React from "react"
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"

import BackgroundImage from "gatsby-background-image"
import { Animated } from "react-animated-css"
import HeroForm from "../HeroForm/HeroForm"
import "./Hero.scss"

const Hero = ({thankYou}) => {
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

  if (thankYou) {
    return (
      <section className="thankYou-hero">
      <BackgroundImage
        Tag="div"
        className="hero-image"
        fluid={backgroundFluidImageStack}
        preserveStackingContent
      >
        <section className="hero-content">
          <Animated
            animationIn="fadeInUp"
            animationOut="fadeOutDown"
            isVisible={true}
          >
            <h1>Thank You!</h1>
          </Animated>
          <Animated
            animationIn="fadeInUp"
            animationOut="fadeOutDown"
            isVisible={true}
          >
            <h3>Please be on the lookout for when we announce the winner by checking us out on social media</h3>
          </Animated>
        </section>
      </BackgroundImage>
    </section>
    )
  }
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
          >
            <h3>Coming Soon!</h3>
          </Animated>
          <Animated
            animationIn="fadeInUp"
            animationOut="fadeOutDown"
          >
            <h1>North Texas' Premier Shooting Range & Event Center</h1>
          </Animated>
        </section>
      </BackgroundImage>
    </section>
  )


}

Hero.defaultProps = {
  thankYou: false
}

Hero.propTypes = {
  thankYou: PropTypes.bool
}

export default Hero
