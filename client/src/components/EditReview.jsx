import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import TrainCar from './TrainCar'
import { BASE_URL } from '../globals'

const EditReview = (props) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [formState, setFormState] = useState(null)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  useEffect(() => {
    const getReviewId = async () => {
      try {
        let response = await axios.get(`${BASE_URL}/api/reviews/${id}`)
        setFormState(response.data.review)
      } catch (error) {
        console.log(error)
      }
    }
    getReviewId()
  }, [id])
  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`${BASE_URL}/api/reviews/${id}`, formState)
    navigate('/')
  }

  return (
    <div className="bg-gray-200 min-h-screen  pb-11">
      <div
        style={{
          backgroundImage: `url('/subwaybg2.jpg')`,
          backgroundPosition: 'top'
        }}
        className="h-96 p-1 flex flex-col justify-center mb-5"
      >
        <TrainCar />
      </div>
      <h1 className="font-bold text-4xl px-1">
        {' '}
        Want to edit the review content?
      </h1>
      <p className="pt-6 px-1">
        {' '}
        Replace the form values to edit the content of this review.
      </p>
      <h1 className="text-xl px-2 font-bold py-2">Edit Review Below</h1>
      {formState && (
        <div className="flex flex-row justify-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col  bg-white md:w-2/3 md:h-72 p-2 border-b-4 border-blue-500 shadow-xl  text-[#0f61a9]  font-bold text-lg mt-20 justify-center "
          >
            <label htmlFor="review">Review:</label>
            <textarea
              id="review"
              defaultValue={formState.review}
              onChange={handleChange}
              className="bg-blue-100 rounded-xl pb-3 mb-1"
            />
            <div className="flex flex-row justify-between mb-8">
              <label htmlFor="rating">Rating:</label>
              <input
                id="rating"
                defaultValue={formState.rating}
                onChange={handleChange}
                className="bg-blue-100 rounded-xl"
              />
            </div>
            <button type="submit" className="button">
              Submit Revision
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default EditReview
