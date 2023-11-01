import React from 'react'
import './styles/About.css'
import { STEPS } from '../App'

export const About = (props) => {
  return (
    <React.Fragment>
      <h1 className="title" onClick={() => props.setStep(STEPS.HOME)}>
        Hotel Epic
      </h1>
      <h2 className="subtitle">About</h2>

      <p>
        Join others in a themed meal to endulge in good food and good drinks.
        Amazing nights with awesome people enjoying:
      </p>
      <ul>
        <li className="list-item">Tacos, Salsas, and Mojitos</li>
        <li className="list-item">Pastas, Sourdough, and Wine</li>
        <li className="list-item">Burgers, Chips, and Beer</li>
        <li className="list-item">Island Snacks, Treats, and Rum Punch</li>
        <li className="list-item">And Many Others</li>
      </ul>
      <p className="about-paragraph">
        Events are hosted at homes, venues, restaurants, bars, etc. Be a part of
        an experience.
      </p>
      <button
        className="large-btn full-width-btn"
        onClick={() => props.setStep(STEPS.HOME)}
      >
        Home
      </button>
    </React.Fragment>
  )
}