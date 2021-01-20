import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

import "./Signup.scss"

const Signup = () => {
  const [formData, setFormData] = useState({
    name: null,
    email: null,
  })
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })

  const handleChange = e => {
    console.log({
      [`${e.target.name}`]: e.target.value,
    })
  }

  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    console.log(form)
    setServerState({ submitting: true })
    setFormData({
      name: form.name.value,
      email: form.email.value,
    })
    addToMailchimp(formData.email)
      .then(console.log("Success!"))
      .catch(error => {
        console.log(error)
      })
      .then(setServerState({ submitting: false, status: "success" }))
  }

  return (
    <section className="signup">
      <div className="text">
        <h3>Sign up for email updates</h3>
        <p>
          Please enter your information below and we'll keep younin the loop for
          everything upcoming!
        </p>
      </div>
      <div className="form">
        <form onSubmit={handleOnSubmit}>
          <div className="fields">
            <div className="name">
              <label className="label label-name" htmlFor="name">
                Name
              </label>
              <input
                className="input name-input"
                id="name"
                type="name"
                name="name"
                required
                onChange={handleChange}
              />
            </div>
            <div className="email">
              <label className="label label-email" htmlFor="email">
                E-mail
              </label>
              <input
                className="input email-input"
                id="email"
                type="email"
                name="email"
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="button-wrapper">
            <button type="submit">Subscribe</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Signup
