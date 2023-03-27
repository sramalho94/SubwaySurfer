import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import TrainCar from './TrainCar'
import { BASE_URL } from '../globals'

const CreateUser = (props) => {
  const [formState, setFormState] = useState({
    userName: '',
    firstName: 'default',
    lastName: 'default',
    password: ''
  })
  const navigate = useNavigate()
  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    let createdUser = await axios
      .post(`${BASE_URL}/api/users`, formState)
      .then((response) => {
        props.setLogIn(true)
        props.setFirstName(formState.firstName)
        navigate('/')
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div className="bg-gray-200 min-h-screen min-w-screen pb-11">
      <div
        style={{
          backgroundImage: `url('/subwaybg3.jpg')`,
          backgroundPosition: 'center'
        }}
        className="h-96 p-1 flex flex-col justify-center mb-5"
      >
        <TrainCar />
      </div>
      <h1 className="font-bold text-4xl px-1"> Want to join our community?</h1>
      <p className="pt-6 px-1">
        {' '}
        In order to join all you have to do is enter a username and password.
      </p>
      <h3 className="text-xl px-2 font-bold py-2">To Sign Up, Fill Out:</h3>
      <div className="flex flex-row justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center bg-white md:w-2/3 md:h-72 p-2 border-b-4 border-blue-500 shadow-xl  text-[#0f61a9]  font-bold text-lg mt-20"
        >
          <div className="flex flex-row pr-10 pb-1">
            <label htmlFor="userName">UserName:</label>
            <input
              id="userName"
              value={formState.userName}
              onChange={handleChange}
              className="bg-blue-100 rounded-xl"
            />
          </div>
          <div className="flex flex-row pr-10 pb-1">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              value={formState.password}
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

export default CreateUser
