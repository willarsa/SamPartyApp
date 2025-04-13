import React, { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="pageContainer">
      <div style={{height: '100vh', display: 'flex', flexDirection: 'column'}}>
        <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr 1fr', gap: '20px', height: '40vh', alignItems: 'start', marginTop: '0', justifyItems: 'center'}}>
          <div className="title" style={{ backgroundColor: '', padding: '15px', borderRadius: '15px', width: 'auto'}}><ColorfulText text="Sam's Party Games"/></div>
          <div className="option option-one">Host Game</div>
          <div className="option option-two">Join Game</div>
        </div>
      </div>
    </div>
  );
}

function ColorfulText({text}){
const colors = ['#ff371b', '#34A853', '#ffc81b', '#4285F4']

  return(
    <h1>
      {text.split('').map((char, index) => (
        <span
          key={index}
          style={{ color: colors[index % colors.length]}}
        >
          {char}
        </span>
      ))}
    </h1>
  );
}

export default App
