import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import "./Signup.scss"

const Signup = () => {
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
    setServerState({ submitting: true })

    addToMailchimp(form.email.value, {
      FNAME: form.FNAME.value,
      LNAME: form.LNAME.value,
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
        <h3>Sign up for email updates</h3>
        <p>
          Please enter your information below to receive exclusive offers and
          updates on everything upcoming.
        </p>
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
                required
                onChange={handleChange}
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
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="email-wrapper">
            <label className="label label-email" htmlFor="email">
              Email
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
          {!serverState.submitting && <h5>{serverState.status}</h5>}
          <div className="button-wrapper">
            <button type="submit">KEEP ME IN THE LOOP</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Signup
