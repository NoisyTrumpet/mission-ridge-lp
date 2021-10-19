import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Navigation, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/a11y"
import "./ImageSlider.scss"

const ImageSlider = () => {
  const { allFile } = useStaticQuery(
    graphql`
      {
        allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "RetailStore" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                gatsbyImageData(quality: 90, layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    `
  )

  const images = allFile.edges.map(image => {
    return (
      <SwiperSlide key={image.node.id}>
        <GatsbyImage
          image={image.node.childImageSharp.gatsbyImageData}
          alt={image.node.name}
        />
      </SwiperSlide>
    )
  })

  return (
    <section className="imageSlider">
      <div className="swiperHeader">
        <h4>Fully Stocked Retail Store</h4>
        <p>
          Shop the best brands of guns, accessories, ammunition and all your
          archery needs!
        </p>
      </div>
      <div className="swiperContainer">
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={30}
          slidesPerView={3}
          navigation={{
            prevEl: ".prev-1",
            nextEl: ".next-1",
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {images}
        </Swiper>
        <div className="prev-1 swiper-button-prev">
          <svg x="0px" y="0px" viewBox="0 0 15.9 31.6">
            <polygon
              class="st0"
              points="15.9,31.6 15.9,23.7 8,15.8 15.9,7.9 15.9,0 0,15.8 "
            />
          </svg>
        </div>
        <div className="next-1 swiper-button-next">
          <svg x="0px" y="0px" viewBox="0 0 15.9 31.6">
            <polygon
              class="st0"
              points="0,0 0,7.9 8,15.8 0,23.7 0,31.6 15.9,15.8 "
            />
          </svg>
        </div>
      </div>
    </section>
  )
}

ImageSlider.defaultProps = {}

ImageSlider.propTypes = {}

export default ImageSlider
