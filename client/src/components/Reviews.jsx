import { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../App.css'


const Reviews = () =>{
  const [reviews, updateReviews] = useState([])
  const [reviewsSubmitted, toggleReviewsSubmitted]= useState(false)

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('/api/reviews')
      
      updateReviews(response.data.reviews)
    }
    apiCall()
  }, [reviewsSubmitted])
  
  const deleteReview = async (id) =>{
    let response = await axios.delete(`/api/reviews/${id}`)
    toggleReviewsSubmitted(!reviewsSubmitted)
  }
  return (
    <div className="Reviews">
      <marquee>
        <img className='Train-car'src='https://cdn.pixabay.com/photo/2017/11/13/08/08/silver-2944881_960_720.png'></img>
      </marquee>
      <h1>All Reviews Here</h1>
      {reviews.map((review) => (
        <div key={review._id} className='review'>
          <img src={review.line.logo} className='logo'></img>
          <h2>{review.review}</h2>
          <h2>{review.rating}</h2>
          <h3>
            {review.user.firstName}, {review.user.userName}
          </h3>
          <div className='buttons'>
          <button type ='button' onClick={()=> deleteReview(review._id)} className='button'>Delete</button>
          <Link to={`/edit-review/${review._id}`}><button className='button'>Edit</button></Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Reviews