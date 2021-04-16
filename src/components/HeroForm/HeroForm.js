import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import Interweave from "interweave"
import { navigate } from "gatsby"
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';
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
      LNAME: form.LNAME.value
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
        } else {
          navigate('/thank-you')
        }
        setServerState({
          submitting: false,
          status: `Looks like you've already been entered to win. Got any other questions? Check out the contact form at the bottom of the page.`,
        })

      })
      .catch(error => {
        console.log(error)
      })

  }

  return (
    <section className="hero-form">
      <div className="text">
      <Jump delay={2000}>
        <h3><span>WIN A FREE</span> MEMBERSHIP & EARLY ACCESS TOUR!</h3>
        </Jump>
        <p>
          Enter your information below to receive early access to the facility and enter to win a FREE Membership.
        </p>
      </div>
      <section className="membership-levels">
          <div className="title">
            <Fade top cascade>
            <h4>Gold Membership</h4>
            </Fade>

          </div>
          <div className="features">
          <Fade left cascade>
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
              </Fade>
          </div>
      </section>
      <div className="form">
        <form onSubmit={handleOnSubmit}>
          <div className="fields">
            <div className="name first">
              <label className="label label-name" htmlFor="FNAME">
                First Name
              </label>
              <input
                className="input name-input"
                id="first-name"
                type="name"
                name="FNAME"
                required
                onChange={handleChange}
              />
            </div>
            <div className="name last">
              <label className="label label-name" htmlFor="LNAME">
                Last Name
              </label>
              <input
                className="input name-input"
                id="last-name"
                type="name"
                name="LNAME"
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
            <section className="error">
              <Interweave content={serverState.status} />
            </section>
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
