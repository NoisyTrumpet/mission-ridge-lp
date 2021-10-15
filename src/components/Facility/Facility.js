import React from "react"
import SlideShow from "./SlideShow.js"
import "./Facility.scss"
import "../ImageSlider/ImageSlider.scss"

const Facility = () => {
  return (
    <section className="facility">
      <section className="imageSlider">
        <div className="swiperContainer">
          <SlideShow />
          <div className="prev swiper-button-prev">
            <svg x="0px" y="0px" viewBox="0 0 15.9 31.6">
              <polygon
                class="st0"
                points="15.9,31.6 15.9,23.7 8,15.8 15.9,7.9 15.9,0 0,15.8 "
              />
            </svg>
          </div>
          <div className="next swiper-button-next">
            <svg x="0px" y="0px" viewBox="0 0 15.9 31.6">
              <polygon
                class="st0"
                points="0,0 0,7.9 8,15.8 0,23.7 0,31.6 15.9,15.8 "
              />
            </svg>
          </div>
        </div>
      </section>

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
