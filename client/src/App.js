import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [reviews, updateReviews] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/reviews')
      updateReviews(response.data.reviews)
    }
    apiCall()
  }, [])

  return (
    <div className="App">
      <h1>All Reviews Here</h1>
      {reviews.map((review) => (
        <div key={review._id}>
          {/* <h1>{review.line_id.line}</h1> */}
          <h2>{review.review}</h2>
          <h2>{review.rating}</h2>
        </div>
      ))}
    </div>
  )
}

export default App
