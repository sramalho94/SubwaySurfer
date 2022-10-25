import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Reviews from './components/Reviews'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Reviews />} />
      </Routes>
    </div>
  )
}

export default App
