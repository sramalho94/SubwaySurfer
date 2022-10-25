import axios from 'axios'
import { useState, useEffect } from 'react'

const CreateUser = ()=>{

  const [formState, setFormState]= useState({ userName: '', firstName: '', lastName: '', password:''})
  
  const handleChange = (event)=>{
    setFormState({...formState, [event.target.id]: event.target.value})
  }
  return(
    <div className="CreateUserForm">
      <h3>To Sign Up, Fill Out:</h3>
      <form>
        <label hmtlFor='userName'>UserName:</label>
        <input id='userName' value={formState.userName} onChange={handleChange}/>
        <label hmtlFor='firstName'>FirstName:</label>
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