import React, { useState } from 'react'
import './styles/Form.css'
import { EVENTS } from '../data'
import { STEPS } from '../App'

export const Form = (props) => {
  const nextEvent = EVENTS.filter((e) => e.next)[0]
  const [joinResp, setJoinResp] = useState(null)
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')

  const joinEvent = (e) => {
    e.preventDefault()
    if (!name || !contact) {
      return alert('Error: Missing name and email/phone number.')
    }

    // Replace Zapier hooks with:
    // - Nodemailer npm
    //   - https://www.w3schools.com/nodejs/nodejs_email.asp
    //   - https://miracleio.me/snippets/use-gmail-with-nodemailer/
    // - Update4 sheets
    //   - https://developers.google.com/sheets/api/quickstart/js#step_2_run_the_sample
    fetch('https://hooks.zapier.com/hooks/catch/13918812/bpehqiy/', {
      method: 'POST',
      body: JSON.stringify({
        event: nextEvent.name,
        name,
        contact,
      }),
    })
      .then((resp) => setJoinResp('Success! See you soon.'))
      .catch((err) => setJoinResp('Error - Please try again.'))
  }

  return (
    <React.Fragment>
      <h1 className="title" onClick={() => props.setStep(STEPS.HOME)}>
        Hotel Epic
      </h1>
      <h2 className="subtitle">Form</h2>
      <p>
        Fill out this form to request more info and get the location for{' '}
        <em>{nextEvent.name}</em>.
      </p>
      <em className="form-tiny-paragraph">
        This isn't a commitment. Things happen and plans change. If you need to
        cancel, no problem, just let us know.
      </em>

      <form className="form-wrapper">
        <label className="form-label" htmlFor="name">
          Name:
        </label>
        <input
          autoFocus={true}
          className="form-input"
          id="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          value={name}
        />
        <label className="form-label" htmlFor="contact">
          Email or Phone Number:
        </label>
        <input
          className="form-input"
          id="contact"
          onChange={(e) => setContact(e.target.value)}
          placeholder="Email or Phone Number(text)"
          value={contact}
        />
        {joinResp && (
          <p
            className={`form-${
              joinResp.includes('Success!') ? 'green' : 'red'
            }-text`}
          >
            {joinResp}
          </p>
        )}
        <button className="small-btn full-width-btn" onClick={joinEvent}>
          Submit
        </button>
        <button
          className="small-btn full-width-btn"
          onClick={() => props.setStep(STEPS.JOIN)}
        >
          Back
        </button>
      </form>
    </React.Fragment>
  )
}
