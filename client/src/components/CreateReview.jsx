import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

const CreateReview = (props)=>{

  const [formState, setFormState]= useState({ user: '63598d93df534106c79bf6d5', line: '', review: '', rating:''})
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
      <marquee>
        <img className='Train-car'src='https://cdn.pixabay.com/photo/2017/11/13/08/08/silver-2944881_960_720.png'></img>
      </marquee>
      <h3>Write Reivew:</h3>
      <form onSubmit={handleSubmit} className='form'>
        <label htmlFor='line'>Line:</label>
        <select id="line" onChange={handleChange}>
          <option value={null} defaultValue>Pick Line</option>
          <option value='6354633a9a8f92586c28ba43'>R</option>
          <option value='635d29a42aca26fd4ff195b0'>7</option>
          <option value='635d2a1f2aca26fd4ff195b2'>G</option>
          <option value="635d694689b020e6440134e1">E</option>
          <option value="635d732789b020e6440134f1">2</option>
          <option value="635d736689b020e6440134f3">L</option>
        </select>
        <label htmlFor='review'>Review:</label>
        <textarea id='review' value={formState.review} onChange={handleChange}/> 
        <label htmlFor='rating'>Rating:</label>
        <input id='rating'value={formState.rating} onChange={handleChange}/>       
        <button type='submit' className='button'>Submit</button>
      </form>
    </div>
  )
}

export default CreateReview