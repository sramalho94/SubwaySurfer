import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Reviews from './components/Reviews'

function App() {
  return (
    <div className="App">
      <Reviews />
    </div>
  )
}

export default App
