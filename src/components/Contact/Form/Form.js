import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

const Form = () => {
  //   const [formData, setFormData] = useState({
  //     firstName: null,
  //     lastName: null,
  //     email: null,
  //     phone: null,
  //     content: null,
  //     reason: null,
  //   })
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })

  //   const handleChange = e => {
  //     const form = e.target
  //     setFormData({
  //       firstName: form.FNAME.value,
  //       lastName: form.LNAME.value,
  //       email: form.email.value,
  //       phone: form.PHONE.value,
  //       content: form.CONTENTS.value,
  //       reason: form.REASON.value,
  //     })
  //   }

  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })

    addToMailchimp(form.email.value, {
      FNAME: form.FNAME.value,
      LNAME: form.LNAME.value,
      CONTENT: form.CONTENT.value,
      REASON: form.REASON.value,
      PHONE: form.PHONE.value,
    })
      .then(response => {
        console.log(response)
        if (response.result === "error") {
          if (response.msg.includes("Recipient")) {
            setServerState({
              submitting: false,
              status: response.msg.split(" &amp")[0],
            })
          }
          setServerState({
            submitting: false,
            status: response.msg,
          })
        }
        setServerState({
          submitting: false,
          status: response.msg,
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <section className="signup">
      <div className="text">
        <h3>
          Please fill out the form below if you have any questions! We will
          contact you within 48 hours.
        </h3>
      </div>
      <div className="form">
        <form onSubmit={handleOnSubmit}>
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
              />
            </div>
          </div>

          <div className="fields">
            <div className="email">
              <label className="label label-email" htmlFor="email">
                E-mail
              </label>
              <input
                className="input email-input"
                id="email"
                type="email"
                name="email"
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
          ></textarea>

          <div className="email-wrapper"></div>
          {!serverState.submitting && <h5>{serverState.status}</h5>}
          <div className="button-wrapper">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Form
