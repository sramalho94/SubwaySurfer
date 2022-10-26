import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

const CreateReview = (props)=>{

  const [formState, setFormState]= useState({ user: '63598d93df534106c79bf6d5', line: '6354633a9a8f92586c28ba43', review: '', rating:''})
  const navigate = useNavigate()
  const handleChange = (event)=>{
    setFormState({...formState, [event.target.id]: event.target.value})
  }
  const handleSubmit = async (event)=>{
    event.preventDefault()
    let createdReview = await axios.post('http://localhost:3001/reviews', 
      formState)
      .then((response)=>{
        console.log(response)
        navigate('/')
      })
      .catch((error)=>{
        console.log(error)
      });
      
  }
  return(
    <div className="CreateUserForm">
      <h3>To Sign Up, Fill Out:</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='review'>Review:</label>
        <input id='review' value={formState.review} onChange={handleChange}/> 
        <label htmlFor='rating'>Rating:</label>
        <input id='rating'value={formState.rating} onChange={handleChange}/>       
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default CreateReview