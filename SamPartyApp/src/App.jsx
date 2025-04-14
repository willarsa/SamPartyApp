import React, { useState } from 'react'
import './App.css'
import { ColorfulText, RotatingBox1, RotatingBox2 } from './components/AppFunctions';
import { Routes, Route } from 'react-router-dom';
import GameSelect from './pages/GameSelect';

function App() {
  return (
    <Routes>
      <Route path="/SamsPartyApp" element={<HomeScreen />} />
      <Route path="/SamsPartyApp/GameSelect" element={<GameSelect />} />
    </Routes>
  );
}

function HomeScreen(){
  return (
    <div className="pageContainer">
      <div style={{height: '100vh', display: 'flex', flexDirection: 'column'}}>
        <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr 1fr', gap: '20px', height: '40vh', alignItems: 'start', marginTop: '0', justifyItems: 'center'}}>
          <div className="title" style={{ backgroundColor: '', padding: '15px', borderRadius: '15px', width: 'auto'}}><ColorfulText text="Sam's Party Games"/></div>
          <div><RotatingBox1 text="Host Game"/></div>
          <div><RotatingBox2 text="Join Game"/></div>
        </div>
      </div>
    </div>
  );
}

export default App
