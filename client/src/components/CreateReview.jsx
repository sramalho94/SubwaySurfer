import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

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
      .post('/api/reviews', formState)
      .then((response) => {
        navigate('/')
      })
      .catch((error) => {
        console.log(error)
      })
  }
  useEffect(() => {
    const getSubwayLines = async () => {
      let response = await axios.get('/api/subways')
      updateSubways(response.data.subways)
    }
    getSubwayLines()
  }, [])
  return (
    <div className="CreateUserForm">
      <div className="train-car-container">
        <img
          className="Train-car"
          src="https://cdn.pixabay.com/photo/2017/11/13/08/08/silver-2944881_960_720.png"
          alt="traincar"
        ></img>
      </div>
      <h3>Write Reivew:</h3>
      <form onSubmit={handleSubmit} className="form">
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
        <label htmlFor="review">Review:</label>
        <textarea
          id="review"
          value={formState.review}
          onChange={handleChange}
        />
        <label htmlFor="rating">Rating:</label>
        <input id="rating" value={formState.rating} onChange={handleChange} />
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  )
}

export default CreateReview
