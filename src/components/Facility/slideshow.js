import React, { useState, useEffect, useRef } from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const SlideShow = () => {
  const [index, setIndex] = useState(0)
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "Facility" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(quality: 90, maxWidth: 1920) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `
  )



  const autoPlayRef = useRef()

  useEffect(() => {
    // autoPlayRef.current = handleNext
  })

  useEffect(() => {
    const play = () => {
      autoPlayRef.current()
    }

    const interval = setInterval(play, Img.autoPlay * 1000)
    return () => clearInterval(interval)
  }, [])


  //Minus 1 for array offset from 0
  const length = allFile.edges.length - 1

  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)

  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)

  const { node } = allFile.edges[index]

  return (
    <div>
      <div>
        <Img
          fluid={node.childImageSharp.fluid}
          key={node.id}
          alt={node.name.replace(/-/g, ' ').substring(2)}
          autoPlay={2}
        />
      </div>

    </div>
  )
}

export default SlideShow;
