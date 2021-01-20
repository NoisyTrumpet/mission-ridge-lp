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
import iconTwitter from "../../static/images/icon-twitter.svg"
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
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        ></link>
        <main>{children}</main>
        <footer>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-5"}>
                <div className={"widget__item"}>
                  <div className={"logo"}>
                    <Link to="/" title={"HiStaff"}>
                      <img alt={"Logo"} src={logo} />
                    </Link>
                  </div>

                  <div className={"about"}>
                    <p>
                      Coming Soon - North Texas’ state-of-the-art, family
                      friendly shooting center and event venue. Our 30,000
                      sqaure foot facility offers pistol, rifle and archery
                      ranges with a virtual training simulator and the only
                      100-yard indoor shooting lanes in Plano, Texas We invite
                      everyone to experience our fun, safe, world-class shooting
                      facility!
                    </p>
                  </div>
                </div>
              </div>

              <div className={"col-2"}>
                <div className={"widget__item"}>
                  <ul className={"links"}>
                    <h4>Mission Ridge</h4>
                    <ul>
                      <li>
                        <a href={"https://www.missionridgerange.com/"}>Home</a>
                      </li>
                      {/* <li>
                        <Link to="/about" title={"About Us"}>
                          About
                        </Link>
                      </li>
                      <li>
                        <a href={"http://missionridgedfw.com//blog"}>Blog</a>
                      </li>
                      <li>
                        <a
                          className={"links__special"}
                          href={"https://feedback.histaff.io/"}
                          target="_blank"
                          rel={"noreferer"}
                          title={
                            "We look forward to receiving your great feedback"
                          }
                        >
                          Feedback
                        </a>
                      </li> */}
                    </ul>
                  </ul>
                </div>
              </div>

              <div className={"col-2"}>
                <div className={"widget__item"}>
                  <div className={"links"}>
                    <h4>Support</h4>
                    <ul>
                      <li>
                        <Link to="/contact" title={"Contact Us"}>
                          Contact
                        </Link>
                      </li>
                      <li>
                        <Link to="/privacy" title={"Privacy Policy"}>
                          Privacy
                        </Link>
                      </li>
                      {/* <li>
                        <Link to="/terms" title={"Terms Of Use"}>
                          Terms Of Use
                        </Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>

              <div className={"col-3"}>
                <div className={"widget__item"}>
                  <div className={"social"}>
                    <a
                      href="https://www.facebook.com/MissionRidgeRange/"
                      target="_blank"
                      rel="noreferer"
                      title={"Facebook"}
                    >
                      <img alt={"Facebook"} src={iconFacebook} />
                    </a>
                    <a
                      href="https://twitter.com/mrra_gunrange"
                      target="_blank"
                      rel="noreferer"
                      title={"Twitter"}
                    >
                      <img alt={"Twitter"} src={iconTwitter} />
                    </a>
                    {/* <a
                      href="https://www.linkedin.com/company/histaff/"
                      target="_blank"
                      rel={"noreferer"}
                      title={"LinkedIn"}
                    >
                      <img alt={"LinkedIn"} src={iconLinkedin} />
                    </a>
                    <a
                      href="https://github.com/histaff"
                      target="_blank"
                      rel={"noreferer"}
                      title={"GitHub"}
                    >
                      <img alt={"GitHub"} src={iconGitHub} />
                    </a> */}
                    <a
                      href="https://www.instagram.com/missionridgerange/"
                      target="_blank"
                      rel={"noreferer"}
                      title={"Instagram"}
                    >
                      <img alt={"Instagram"} src={iconInstagram} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={"copyright"}>
              <p>
                Copyright {new Date().getFullYear()}, {` `}{" "}
                <a href="http://missionridgedfw.com/" title={"HiStaff"}>
                  Mission Ridge | DFW
                </a>
                . All rights reserved.
              </p>
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
