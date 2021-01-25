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
import "../../static/styles/main.scss"
import logo from "../../static/images/logo_maroon.svg"
import iconYoutube from "../../static/images/youtube.svg"
import iconInstagram from "../../static/images/icon-instagram.svg"
import iconFacebook from "../../static/images/icon-facebook.svg"

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
                <img alt={"Logo"} src={logo} />
              </Link>
            </div>

            <div className={"about"}>
              <p>
                Coming Soon - North Texas’ state-of-the-art, family friendly
                shooting center and event venue. Our 30,000 sqaure foot facility
                offers pistol, rifle and archery ranges with a virtual training
                simulator and the only 100-yard indoor shooting lanes in Plano,
                Texas We invite everyone to experience our fun, safe,
                world-class shooting facility!
              </p>
            </div>

            <div className="social">
              <a
                href="https://www.facebook.com/MissionRidgeRange/"
                target="_blank"
                rel="noreferrer"
                title={"Facebook"}
              >
                <img alt={"Facebook"} src={iconFacebook} />
              </a>
              <a
                href="https://www.youtube.com/channel/UC5LaBuUcQPfdKbAuevQJEBQ"
                target="_blank"
                rel="noreferrer"
                title={"YoutTube"}
              >
                <img alt={"YoutTube"} src={iconYoutube} />
              </a>
              {/* <a
                      href="https://www.linkedin.com/company/histaff/"
                      target="_blank"
                      rel={"noreferrer"}
                      title={"LinkedIn"}
                    >
                      <img alt={"LinkedIn"} src={iconLinkedin} />
                    </a>
                    <a
                      href="https://github.com/histaff"
                      target="_blank"
                      rel={"noreferrer"}
                      title={"GitHub"}
                    >
                      <img alt={"GitHub"} src={iconGitHub} />
                    </a> */}
              <a
                href="https://www.instagram.com/missionridgerange/"
                target="_blank"
                rel={"noreferrer"}
                title={"Instagram"}
              >
                <img alt={"Instagram"} src={iconInstagram} />
              </a>
            </div>

            <div className={"copyright"}>
              <p>
                © Copyright {new Date().getFullYear()}, {` `} Mission Ridge
                Range & Academy | DFW. All rights reserved.{` `}
              </p>
              <Link to="/privacy" title={"Privacy Policy"}>
                Privacy
              </Link>
            </div>
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
