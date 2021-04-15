import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import "./Picture.scss"

const Picture = () => {
  const data = useStaticQuery(graphql`{
  desktop: file(relativePath: {eq: "rendering.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 90, layout: FULL_WIDTH)
    }
  }
}
`)

  const backgroundFluidImageStack = [
    data.desktop.childImageSharp.gatsbyImageData,
    `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2))`,
  ].reverse()

  return (
    <section className="rendering-section">
      <GatsbyImage
        image={backgroundFluidImageStack}
        alt="Mission Ridge-DFW building"
        className="render-image" />
      <div>
        <p>
          Coming Soon - North Texas' state-of-the-art, family-friendly shooting
          center and event venue. Our 30,000 square foot facility will offer
          pistol, rifle and archery ranges with a virtual training simulator and
          will feature 100-yard indoor shooting lanes! We invite everyone to
          experience our fun, safe, world-class shooting facility!
        </p>
      </div>
    </section>
  );
}

export default Picture
