import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import Fade from "react-reveal/Fade"
import BackgroundImage from "gatsby-background-image"

import HeroForm from "../HeroForm/HeroForm"
import Social from "../Social/Social"
import "./Hero.scss"

const Hero = ({ thankYou, contact }) => {
  const placeHolderImage = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "hero.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 1920
              placeholder: BLURRED
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
            <Fade left cascade>
              <h1>Thank You!</h1>
            </Fade>

            {contact ? (
              <h3>We will contact you within 48 hours.</h3>
            ) : (
              <h3>
                Please be on the lookout for the winner announcement by checking
                us out on social media.
              </h3>
            )}

            <Social />
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
          <Fade bottom>
            <h3>Now Open!</h3>
            <h1>Plano / Richardson’s Premier Shooting Range & Event Center</h1>
          </Fade>
        </section>
      </BackgroundImage>
    </section>
  )
}

Hero.defaultProps = {
  thankYou: false,
}

Hero.propTypes = {
  thankYou: PropTypes.bool,
}

export default Hero
