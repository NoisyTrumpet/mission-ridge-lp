import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Contact } from "../components/Contact"

const ContactPage = () => (
  <Layout>
    <Seo title="Contact" />
    <div className={"container"}>
      <div className={"content"}>
        <div className={"title"}>
          <h1>Contact</h1>
        </div>
      </div>
    </div>
    <Contact />
  </Layout>
)

export default ContactPage
