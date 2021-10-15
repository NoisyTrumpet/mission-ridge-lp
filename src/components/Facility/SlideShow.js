import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Navigation, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/a11y"

const SlideShow = () => {
  const { allFile } = useStaticQuery(
    graphql`
      {
        allFile(filter: { relativeDirectory: { eq: "Facility" } }) {
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

  const images = allFile.edges.map(({ node }) => {
    return (
      <SwiperSlide key={node.id}>
        <GatsbyImage
          image={node.childImageSharp.gatsbyImageData}
          alt={node.name}
        />
      </SwiperSlide>
    )
  })

  return (
    <Swiper
      modules={[Navigation, A11y]}
      spaceBetween={30}
      slidesPerView={3}
      navigation={{
        prevEl: ".prev",
        nextEl: ".next",
      }}
      breakpoints={{
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {images}
    </Swiper>
  )
}

export default SlideShow
