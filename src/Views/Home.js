import React from 'react'
import './styles/Home.css'
import { STEPS } from '../App'

export const Home = (props) => {
  return (
    <React.Fragment>
      <h1 className="title">Hotel Epic</h1>
      <h2 className="subtitle">Supper Club</h2>
      <p className="home-paragraph">
        Gather and enjoy good food, good drinks, and good people.
      </p>
      <div className="nav-bar">
        <button
          className="small-btn"
          onClick={() => props.setStep(STEPS.ABOUT)}
        >
          About Hotel Epic
        </button>
        {/* <button className="small-btn" onClick={() => props.setStep(STEPS.SEE)}>
          See Hotel Epic
        </button>
        <button
          className="small-btn override-margin-top"
          onClick={() => props.setStep(STEPS.JOIN)}
        >
          Join Hotel Epic
        </button> */}
      </div>
    </React.Fragment>
  )
}
