import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import "./training.scss"

const TrainingAcademy = ({ title, image }) => {
  return (
    <section className="training-academy">
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
      </div>
      <div className="filter" />
    </section>
  )
}

export default TrainingAcademy
