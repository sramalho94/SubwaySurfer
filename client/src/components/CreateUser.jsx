import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

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
      .post('/api/users', formState)
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
    <div className="CreateUserForm">
      <div className="train-car-container">
        <img
          className="Train-car"
          src="https://cdn.pixabay.com/photo/2017/11/13/08/08/silver-2944881_960_720.png"
          alt="traincar"
        ></img>
      </div>
      <h3>To Sign Up, Fill Out:</h3>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="userName">UserName:</label>
        <input
          id="userName"
          value={formState.userName}
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          value={formState.password}
          onChange={handleChange}
        />
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  )
}

export default CreateUser
