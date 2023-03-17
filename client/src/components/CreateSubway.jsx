import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

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
      .post('/api/subways', formState)
      .then((response) => {
        setFormState({ line: '', description: '', logo: '' })
        navigate('/')
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div className="CreateUserForm">
      <h3>Add Another Line here:</h3>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="line">Line:</label>
        <input id="line" value={formState.line} onChange={handleChange}></input>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={formState.description}
          onChange={handleChange}
        ></textarea>
        <label htmlFor="logo">Logo Image Url:</label>
        <input id="logo" value={formState.logo} onChange={handleChange}></input>
        <button type="submit">Add Line</button>
      </form>
    </div>
  )
}
export default CreateSubway
