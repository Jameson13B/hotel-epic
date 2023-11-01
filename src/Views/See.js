import React from 'react'
import './styles/Home.css'
import { STEPS } from '../App'

export const See = (props) => {
  return (
    <React.Fragment>
      <h1 className="title" onClick={() => props.setStep(STEPS.HOME)}>
        Hotel Epic
      </h1>
      <h2 className="subtitle">See</h2>

      <p>A gallery of past events will be here.</p>
    </React.Fragment>
  )
}
