import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import Divide from './Divide'

function ErrorFallback({error}){
  return(
    <div style={{color:"red"}}>
    <h2>Someting went Wronf</h2>
    <p>{error.message}</p>
    </div>

  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Divide/>
      </ErrorBoundary>
    </div>
    </>
  )
}

export default App
