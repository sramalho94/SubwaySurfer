import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Reviews from './components/Reviews'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import CreateUser from './components/CreateUser'
function App() {
  const [isLoggedIn, setLogIn] = useState(false)
  const [userName, setSetUser] = useState(null)
  const [firstName, setFirstName] = useState(null)
  return (
    <div className="App">
      <header>
        <Nav isLoggedIn={isLoggedIn} firstName={firstName} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Reviews />} />
          <Route
            path="/users"
            element={
              <CreateUser setLogIn={setLogIn} setFirstName={setFirstName} />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
