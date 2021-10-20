import React from "react"
import Dart from "../../SVGComps/Dart"
import Gun from "../../SVGComps/Gun"
import Target from "../../SVGComps/Target"

const Icon = ({ icon }) => {
  if (icon) {
    switch (icon) {
      case "target":
        return <Target />
      case "dart":
        return <Dart />
      case "gun":
        return <Gun />
      default:
        return <Dart />
    }
  }
}

const Card = ({ title, icon, details, subDetails, discount }) => {
  return (
    <div className="card">
      <div className="card-header">
        {title && <p className="card-header-title heading black">{title}</p>}
      </div>
      <div className="card-icon">{icon && <Icon icon={icon} />}</div>
      <div className="card-content">
        <div className="card-content-details">
          <ul>
            {details &&
              details.map((detail, index) => (
                <li key={index}>{detail.content}</li>
              ))}
          </ul>
        </div>
        <div className="card-content-sub-details">
          {discount && <p className="card-footer-discount">{discount}</p>}
        </div>
      </div>
      <div className="card-footer">
        <ul>
          {subDetails &&
            subDetails.map((subDetail, index) => (
              <li key={index} className={subDetail.bold && "bold" || subDetail.color === 'black' && 'black'}>
                {subDetail.content}
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Card
