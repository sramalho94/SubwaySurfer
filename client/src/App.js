import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Reviews from './components/Reviews'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Reviews />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
