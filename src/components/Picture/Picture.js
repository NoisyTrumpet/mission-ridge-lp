import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./Picture.scss"

const Picture = () => {
  const placeHolderImage = useStaticQuery(graphql`
    {
      placeholderImage: file(
        relativePath: { eq: "MRRA_Plano_Int_Ext-5-minified.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `)

  const image = getImage(placeHolderImage.placeholderImage)

  return (
    <section className="rendering-section">
      <GatsbyImage
        image={image}
        alt="Mission Ridge-DFW building"
        className="render-image"
        imgStyle={{ position: "static" }}
      />
      <div>
        <p>
          Plano / Richardson’s state-of-the-art, family-friendly shooting center
          and event venue. Our 30,000 square foot facility offers pistol, rifle
          and archery ranges with a virtual training simulator and will feature
          100-yard indoor shooting lanes! We invite everyone to experience our
          fun, safe, world-class shooting facility!
        </p>
      </div>
    </section>
  )
}

export default Picture
