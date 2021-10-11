import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const SlideShow = () => {
  const [index, setIndex] = useState(0)
  const { allFile } = useStaticQuery(
    graphql`
      {
        allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "Facility" } }
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

  const length = allFile.edges.length - 1
  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)
  // const handlePrevious = () =>
  //   index === 0 ? setIndex(length) : setIndex(index - 1)
  const { node } = allFile.edges[index]

  useEffect(() => {
    const timeout = setTimeout(() => handleNext(), 3000)

    return () => clearTimeout(timeout)
  })

  return (
    <GatsbyImage
      image={node.childImageSharp.gatsbyImageData}
      key={node.id}
      alt={node.name.replace(/-/g, " ").substring(2)}
    />
  )
}

export default SlideShow
