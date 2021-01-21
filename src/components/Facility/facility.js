import React from "react"
import SlideShow from "./slideshow.js"
import "./facility.scss"

const Facility = () => {
  return (
    <section className="facility">
      <div className="imgGrid">
        <SlideShow />
      </div>

      <div className="perks-Sect">
        <h3>Inside our 30,000 sq ft facility</h3>
        <div className="perks">
          <ul>
            <li>Open to the public,No Membership Required to shoot!</li>
            <li>Premier 100-yard indoor range</li>
            <li>Shooting lanes with computer-controlled targets</li>
            <li>Sound abatement and high-tech air handling</li>
            <li>Large retail store with firearms and ammo</li>
            <li>On-site full-time experienced gunsmith</li>
            <li>First-class training and event spaces</li>
            <li>Archery range & pro shop</li>
            <li>Safe, family friendly environment</li>
            <li>Shop over 30,000 sq.ft. of retail</li>
            <li>26 air conditioned shooting lanes</li>
            <li>Over 100 rental firearms and bows</li>
            <li>Friendly and knowledgeable staff</li>
            <li>Dynamic virtual training simulator</li>
            <li>friendly range officers & instructors</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

Facility.defaultProps = {}

Facility.propTypes = {}

export default Facility
