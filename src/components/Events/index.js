import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import "./events.scss"

const Events = ({ title, details, image }) => {
  return (
    <section className="upcoming-events">
      {image && title && (
        <div className="img-wrapper">
          <GatsbyImage
            image={getImage(image)}
            alt={title}
            style={{ height: "100%", width: "100%" }}
          />
        </div>
      )}
      <div className="container">
        <div className="title-wrapper">
          {title && <p className="title heading">{title}</p>}
        </div>
        {details && <p class="details-body">{details}</p>}
        <div className="button-wrapper">
          <a
            className="button"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.missionridgerange.com/join-us/"
          >
            <p className="heading">Learn More</p>
          </a>
        </div>
      </div>
      <div className="filter" />
    </section>
  )
}

export default Events
