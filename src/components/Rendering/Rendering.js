import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Img } from "gatsby-image"
import RenderingStyles from "./Rendering.scss"

const Rendering = () => {
  // const data = useStaticQuery(graphql`
  //   query RenderingImg {
  //     image: file(relativePath: { eq: "rendering.png" }) {
  //       childImageSharp {
  //         fluid {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  // const renderingImg = data.image.childImageSharp.fluid;

  return (
    <section className="rendering-section">
      {/* <Img
        fluid={renderingImg}
        alt="Mission Ridge-Plano building"
        id="renderingImg"
      /> */}
      <div>
        Coming Soon - North Texas' state-of-the-art, family-friendly shooting
        center and event venue. Our 30,000 square foot facility offers pistol,
        rifle and archery ranges with a virtual training simulator and the only
        100-yard indoor shooting lanes in Plano, Texas. We invite everyone to
        experience our fun, safe, world-class shooting facility!
      </div>
    </section>
  )
}

export default Rendering