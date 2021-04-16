import React from "react"
import SlideShow from "./SlideShow.js"
import "./Facility.scss"

const Facility = () => {
  return (
    <section className="facility">
      <div className="imgGrid">
        <SlideShow />
      </div>

      <div className="perks-sect">
        <h4>Inside our 30,000 sq ft facility</h4>
        <div className="perks">
          <div className="perks-sub">
            <ul>
              <li>Open to the public – no Membership required to shoot!</li>
              <li>Safe, family-friendly environment</li>
              <li>First-class training & event spaces</li>
              <li>Friendly & knowledgeable staff</li>
              <li>Dynamic virtual training simulator</li>
              <li>Premier 100-yard indoor range</li>
              <li>Shooting lanes with computer-controlled targets</li>
              <li>26 air-conditioned shooting lanes</li>
              <li>Sound abatement & high-tech air handling</li>
              <li>Over 100 rental firearms & bows</li>
              <li>Archery range & pro shop</li>
              <li>Large retail store with firearms & ammo</li>
              <li>On-site full-time, experienced gunsmith</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

Facility.defaultProps = {}

Facility.propTypes = {}

export default Facility
