import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { Animated } from "react-animated-css"
import "./Hero.scss"

const Hero = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "hero.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const backgroundFluidImageStack = [
    data.desktop.childImageSharp.fluid,
    `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2))`,
  ].reverse()

  return (
    <section className="hero">
      <BackgroundImage
        Tag="div"
        className="hero-image"
        fluid={backgroundFluidImageStack}
      >
        <section className="hero-content">
          <Animated
            animationIn="fadeInUp"
            animationOut="fadeOutDown"
            isVisible={true}
          >
            <h1>North Texas' Premier Shooting Range & Event Center</h1>
          </Animated>
          <Animated
            animationIn="fadeInUp"
            animationOut="fadeOutDown"
            isVisible={true}
          >
            <h4>Coming Spring 2021!</h4>
          </Animated>
        </section>
      </BackgroundImage>
    </section>
  )
}

Hero.defaultProps = {}

Hero.propTypes = {}

export default Hero
