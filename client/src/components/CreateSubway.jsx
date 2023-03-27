import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { BASE_URL } from '../globals'
import TrainCar from './TrainCar'

const CreateSubway = () => {
  const navigate = useNavigate()
  const [formState, setFormState] = useState({
    line: '',
    description: '',
    logo: ''
  })
  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()

    let newSubway = await axios
      .post(`${BASE_URL}/api/subways`, formState)
      .then((response) => {
        setFormState({ line: '', description: '', logo: '' })
        navigate('/')
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div className="bg-gray-200 min-h-screen pt-5 flex flex-col-reverse md:flex-col pb-10">
      <div>
        <h1 className="font-bold text-4xl"> Don't see your line or bus?</h1>
        <p className="pt-6">
          {' '}
          New York City is constantly evolving. If you don't see your train or
          bus listed on our site you can add it by filling out this form.
        </p>
        <h3 className="text-xl px-2 font-bold py-2">Add Another Line here:</h3>
        <div className="flex flex-row justify-center">
          <form
            className="flex flex-col  bg-white md:w-2/3 md:h-72 p-2 border-b-4 border-blue-500 shadow-xl  text-[#0f61a9]  font-bold text-lg mt-20"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-row justify-between pb-1">
              <label htmlFor="line">Line:</label>
              <input
                id="line"
                value={formState.line}
                onChange={handleChange}
                className="bg-blue-100 rounded-xl"
              ></input>
            </div>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={formState.description}
              onChange={handleChange}
              className="bg-blue-100 rounded-xl pb-3 mb-1"
            ></textarea>
            <div className="flex flex-row justify-between mb-8">
              <label htmlFor="logo">Logo Image Url:</label>
              <input
                id="logo"
                value={formState.logo}
                onChange={handleChange}
                className="bg-blue-100 rounded-xl"
              ></input>
            </div>
            <button type="submit">Add Line</button>
          </form>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url('/subwaybg4.jpg')`,
          backgroundPosition: 'center'
        }}
        className="h-96 p-1 flex flex-col justify-center mb-5 mt-28"
      >
        <TrainCar />
      </div>
    </div>
  )
}
export default CreateSubway
