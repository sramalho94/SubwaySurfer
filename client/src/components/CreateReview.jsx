import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import TrainCar from './TrainCar'
import { BASE_URL } from '../globals'

const CreateReview = (props) => {
  const [subways, updateSubways] = useState([])
  const [formState, setFormState] = useState({
    user: '63598d93df534106c79bf6d5',
    line: '',
    review: '',
    rating: ''
  })
  const navigate = useNavigate()
  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    let createdReview = await axios
      .post(`${BASE_URL}/api/reviews`, formState)
      .then((response) => {
        navigate('/')
      })
      .catch((error) => {
        console.log(error)
      })
  }
  useEffect(() => {
    const getSubwayLines = async () => {
      let response = await axios.get(`${BASE_URL}/api/subways`)
      updateSubways(response.data.subways)
    }
    getSubwayLines()
  }, [])
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
        Have you recently ridden the subway and want to leave a review?
      </h1>
      <p className="pt-6 px-1">
        {' '}
        In order to provide the most valuable feedback, please be specific about
        the details of your ride. The Rating scale is out of 10, ex. 5/10 for an
        average experience.
      </p>
      <h3 className="text-xl px-2 font-bold py-2">Write Reivew:</h3>
      <div className="flex flex-row justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col  bg-white md:w-2/3 md:h-72 p-2 border-b-4 border-blue-500 shadow-xl  text-[#0f61a9]  font-bold text-lg mt-20"
        >
          <div className="flex flex-row justify-between pb-1">
            <label htmlFor="line">Line:</label>
            <select id="line" onChange={handleChange}>
              <option value={null} defaultValue>
                Pick Line
              </option>
              {subways.map((subway) => (
                <option value={subway._id} key={subway._id}>
                  {subway.line}
                </option>
              ))}
            </select>
          </div>
          <label htmlFor="review">Review:</label>
          <textarea
            id="review"
            value={formState.review}
            onChange={handleChange}
            className="bg-blue-100 rounded-xl pb-3 mb-1"
          />
          <div className="flex flex-row justify-between mb-8">
            <label htmlFor="rating">Rating:</label>
            <input
              id="rating"
              value={formState.rating}
              onChange={handleChange}
              className="bg-blue-100 rounded-xl"
            />
          </div>
          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateReview
