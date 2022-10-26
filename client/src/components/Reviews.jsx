import { useState, useEffect } from 'react'
import axios from 'axios'

const Reviews = () =>{
  const [reviews, updateReviews] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/reviews')
      console.log(response)
      
      updateReviews(response.data.reviews)
    }
    apiCall()
  }, [])

  return (
    <div className="Reviews">
      <marquee>
        <img src='https://cdn.pixabay.com/photo/2017/11/13/08/08/silver-2944881_960_720.png'></img>
      </marquee>
      <h1>All Reviews Here</h1>
      {reviews.map((review) => (
        <div key={review._id}>
          <img src={review.line.logo}></img>
          <h2>{review.review}</h2>
          <h2>{review.rating}</h2>
          <h3>
            {review.user.firstName}, {review.user.userName}
          </h3>
          <button 
          // onClick={}
          >Edit</button>
          <button>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default Reviews