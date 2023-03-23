import { useState, useEffect } from 'react'
import axios from 'axios'
import Reviews from './components/Reviews'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import CreateUser from './components/CreateUser'
import EditReview from './components/EditReview'
import CreateReview from './components/CreateReview'
import SubwayLines from './components/SubwayLines'
import CreateSubway from './components/CreateSubway'

function App() {
  const [isLoggedIn, setLogIn] = useState(false)
  const [firstName, setFirstName] = useState(null)
  return (
    <div className="App">
      <header>
        <Nav isLoggedIn={isLoggedIn} firstName={firstName} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Reviews />} className="navlink" />
          <Route
            path="/users"
            element={
              <CreateUser setLogIn={setLogIn} setFirstName={setFirstName} />
            }
          />
          <Route path="/edit-review/:id" element={<EditReview />} />
          <Route path="/write-review" element={<CreateReview />} />
          <Route path="/subways" element={<SubwayLines />} />
          <Route path="/add-subway" element={<CreateSubway />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
