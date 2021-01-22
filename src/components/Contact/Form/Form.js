import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

const Form = () => {
  return (
    <section className="signup">
      <div className="text">
        <h3>Please fiil out the form below if you have any questions!</h3>
        <p>We will contact you within 48 hours.</p>
      </div>
      <div className="form">
        <form
          action="https://getform.io/f/fdd50f40-4c9f-4126-935c-3ed2ad7c273c"
          method="POST"
        >
          <div className="fields">
            <div className="name">
              <label className="label label-fname" htmlFor="FNAME">
                First Name
              </label>
              <input
                className="input name-input"
                id="FNAME"
                type="FNAME"
                name="FNAME"
                required
              />
            </div>
            <div className="lname">
              <label className="label label-lname" htmlFor="LNAME">
                Last Name
              </label>
              <input
                className="input name-input"
                id="LNAME"
                type="LNAME"
                name="LNAME"
                required
              />
            </div>
          </div>

          <div className="fields">
            <div className="email">
              <label className="label label-email" htmlFor="email">
                Email
              </label>
              <input
                className="input email-input"
                id="email"
                type="email"
                name="email"
                required
              />
            </div>
            <div className="phone">
              <label className="label label-phone" htmlFor="PHONE">
                Phone
              </label>
              <input
                className="input phone-input"
                type="tel"
                name="PHONE"
                id="phone"
              />
            </div>
          </div>
          <select
            className="input input-select reason-input"
            placeholder="Reason"
            name="REASON"
          >
            <option
              value="Select"
              defaultValue=""
              disabled=""
              className="placeholder"
              required
            >
              Reason
            </option>
            <option value="Join Our Team">Join Our Team</option>
            <option value="Memberships">Memberships</option>
            <option value="General Questions">General Questions</option>
            <option value="Public Relations">Public Relations</option>
          </select>
          <textarea
            className="input input-textarea message-input"
            id="message"
            name="CONTENT"
            placeholder="Message"
            required
          ></textarea>

          <div className="email-wrapper"></div>
          <div className="button-wrapper">
            <button type="submit">Contact</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Form
