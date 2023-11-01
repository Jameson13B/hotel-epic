import React, { useState } from 'react'
import './App.css'

import { About } from './Views/About'
import { Join } from './Views/Join'
import { Home } from './Views/Home'
import { See } from './Views/See'
import { Form } from './Views/Form'

export const STEPS = {
  ABOUT: 'about',
  FORM: 'form',
  HOME: 'home',
  JOIN: 'join',
  SEE: 'see',
}

function App() {
  const [step, setStep] = useState(STEPS.HOME)

  return (
    <div className="App">
      <header
        className={`App-content${step === STEPS.HOME ? ' top-padding' : ''}`}
      >
        {step === STEPS.ABOUT && <About setStep={setStep} />}

        {step === STEPS.HOME && <Home setStep={setStep} />}

        {step === STEPS.JOIN && <Join setStep={setStep} />}

        {step === STEPS.SEE && <See setStep={setStep} />}

        {step === STEPS.FORM && <Form setStep={setStep} />}
      </header>
    </div>
  )
}

export default App
