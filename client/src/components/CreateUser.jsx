import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

const CreateUser = (props)=>{

  const [formState, setFormState]= useState({ userName: '', firstName: '', lastName: '', password:''})
  const navigate = useNavigate()
  const handleChange = (event)=>{
    setFormState({...formState, [event.target.id]: event.target.value})
  }
  const handleSubmit = async (event)=>{
    event.preventDefault()
    let createdUser = await axios.post('http://localhost:3001/users', 
      formState)
      .then((response)=>{
        console.log(response)
        console.log(props)
        props.setLogIn(true)
        props.setFirstName(formState.firstName)
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
      <h3>To Sign Up, Fill Out:</h3>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor='userName'>UserName:</label>
        <input id='userName' value={formState.userName} onChange={handleChange}/>
        <label htmlFor='firstName'>FirstName:</label>
        <input id='firstName' value={formState.firstName} onChange={handleChange}/>
        <label htmlFor='lastName'>LastName:</label>
        <input id='lastName' value={formState.lastName} onChange={handleChange}/> 
        <label htmlFor='password'>Password:</label>
        <input id='password'value={formState.password} onChange={handleChange}/>       
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default CreateUser