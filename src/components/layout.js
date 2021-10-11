/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import Seo from "../components/seo"
import "../../static/styles/main.scss"
import YouTube from "./Social/Fragments/YouTube"
import Facebook from "./Social/Fragments/Facebook"
import Instagram from "./Social/Fragments/Instagram"
import Logo from "./SVGComps/Logo"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Seo
          title={data.site.siteMetadata.title}
          description={data.site.siteMetadata.description}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/ujo8xej.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/ujo8xej.css"
        ></link>
        <main>{children}</main>
        <footer>
          <div className={"container"}>
            <div className={"logo"}>
              <Link to="/" title={"HiStaff"}>
                <Logo />
              </Link>
            </div>

            <div className={"about"}>
              <p style={{ color: "#333" }}>
                North Texas' state-of-the-art, family-friendly shooting center
                and event venue. Our 30,000 square foot facility will offer
                pistol, rifle and archery ranges with a virtual training
                simulator and will feature 100-yard indoor shooting lanes! We
                invite everyone to experience our fun, safe, world-class
                shooting facility!
              </p>
            </div>

            <div className="social">
              <a
                href="https://www.facebook.com/MissionRidgeRange/"
                target="_blank"
                rel="noreferrer"
                title={"Facebook"}
              >
                <Facebook />
              </a>
              <a
                href="https://www.youtube.com/channel/UC5LaBuUcQPfdKbAuevQJEBQ"
                target="_blank"
                rel="noreferrer"
                title={"YoutTube"}
              >
                <YouTube />
              </a>
              <a
                href="https://www.instagram.com/missionridgerange/"
                target="_blank"
                rel={"noreferrer"}
                title={"Instagram"}
              >
                <Instagram />
              </a>
            </div>

            <p className="copyright" style={{ color: "#333" }}>
              © Copyright {new Date().getFullYear()}, {` `} Mission Ridge Range
              & Academy All rights reserved.
              <br />
              <Link to="/privacy" title={"Privacy Policy"}>
                Privacy
              </Link>
            </p>
          </div>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
