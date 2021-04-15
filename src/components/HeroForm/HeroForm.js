import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import Interweave from "interweave"
import "./HeroForm.scss"

const HeroForm = () => {
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
    <section className="hero-form">
      <div className="text">
        <h3><span>WIN A FREE</span> MEMBERSHIP & EARLY ACCESS TOUR!</h3>
        <p>
          Enter your information below to receive early access to the facility and enter to win a FREE Membership.
        </p>
      </div>
      <section className="membership-levels">
          <div className="title">
              <h4>Gold Membership</h4>
          </div>
          <div className="features">
              <ul>
                  <li>Priority Lane Reservations</li>
                  <li>
                      Complimentary Unlimited Shooting
                  </li>
                  <li>
                      Retail & Training Discounts
                  </li>
                  <li>And much more!</li>
              </ul>
          </div>
      </section>
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
            {/* <div className="lname">
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
            </div> */}
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
          </div>

          {!serverState.submitting && (
            <Interweave content={serverState.status} />
          )}
          <div className="button-wrapper">
            <button type="submit">ENTER ME!</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default HeroForm
