import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "./Contact.scss"
import Form from "./Form/Form"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Contact = () => {
  const placeHolderImage = useStaticQuery(graphql`
    {
      placeholderImage: file(relativePath: { eq: "map.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `)
  const image = getImage(placeHolderImage.placeholderImage)
  return (
    <section className="contact-section">
      <div className="map-wrapper">
        <div className="svg">
          <a
            href="https://www.google.com/maps/dir//4340+Mapleshade+Ln,+Plano,+TX+75075/@33.0064181,-96.781033,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x864c2238f261111d:0x9ab85c6e0ea8d0a7!2m2!1d-96.7788443!2d33.0064181"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GatsbyImage
              image={image}
              alt="Mission Ridge-DFW Map"
              imgStyle={{ position: "static" }}
            />
          </a>
        </div>
        <div className="cta">
          <div className="text">
            <h2>Contact Us</h2>
            <a
              href="https://www.google.com/maps/dir//4340+Mapleshade+Ln,+Plano,+TX+75075/@33.0064181,-96.781033,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x864c2238f261111d:0x9ab85c6e0ea8d0a7!2m2!1d-96.7788443!2d33.0064181"
              target="_blank"
              rel="noopener noreferrer"
            >
              4340 Mapleshade Lane | Plano, TX | 75093
            </a>
            <a href="tel:972.703.9000">(972) 703-9000</a>
            <p>Access via Mapleshade Lane</p>
          </div>
        </div>
      </div>
      <Form />
    </section>
  )
}

export default Contact
