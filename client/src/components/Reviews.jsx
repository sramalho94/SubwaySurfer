import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../globals'
import TrainCar from './TrainCar'

const Reviews = () => {
  const [reviews, updateReviews] = useState([])
  const [reviewsSubmitted, toggleReviewsSubmitted] = useState(false)

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get(`${BASE_URL}/api/reviews`)
      updateReviews(response.data.reviews)
    }
    apiCall()
  }, [reviewsSubmitted])

  const deleteReview = async (id) => {
    let response = await axios.delete(`/api/reviews/${id}`)
    toggleReviewsSubmitted(!reviewsSubmitted)
  }
  return (
    <div className="bg-gray-200 min-h-screen ">
      <div
        style={{
          backgroundImage: `url('/subwaybg.jpg')`,
          backgroundPosition: 'center'
        }}
        className="h-26 p-1 md:h-72 flex flex-col justify-center"
      >
        <TrainCar />
      </div>
      <h1 className="text-xl px-2 font-bold py-2">All Reviews Here</h1>
      <div className="flex flex-col md:grid md:grid-cols-3">
        {reviews.map((review) => (
          <div
            key={review._id}
            className="bg-white m-4 p-2 border-b-4 border-blue-500 shadow-xl hover:bg-[#0f61a9] text-[#0f61a9] hover:text-white font-bold text-lg"
          >
            <div className="flex flex-row align-middle">
              <img src={review.line.logo} className="h-20" alt={review._id} />
              <h2 className="my-auto">{review.rating}</h2>
            </div>
            <h2>{review.review}</h2>

            <h3 className="text-sm">
              {review.user.firstName}, {review.user.userName}
            </h3>
            <div className="flex flex-row justify-center ">
              <button
                type="button"
                onClick={() => deleteReview(review._id)}
                className="p-1"
              >
                Delete
              </button>
              <Link to={`/edit-review/${review._id}`}>
                <button className="p-1">Edit</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reviews
