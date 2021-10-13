import React from "react"
import "./family.scss"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Family = ({ description, cta, image, title }) => {
  return (
    <section className="family-section">
      <p className="title-heading">Join Our Family!</p>
      <div className="container">
        <div className="img-wrapper">
          <GatsbyImage
            image={getImage(image)}
            alt={title}
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div className="cta">
          <p>
            <span className="heading">A Membership Level for everyone!</span>{" "}
            Becoming a member at Mission Ridge Range & Academy maximizes your
            experience by offering complimentary range fees, carious discounts
            and the opportunity to 'advance your sport'!
          </p>
          <p>Learn More about membership pricing....</p>
          <div className="button-wrapper">
            <a
              className="button"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.missionridgerange.com/memberships/"
            >
              <p className="heading">Learn More</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Family
