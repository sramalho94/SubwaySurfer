import axios from "axios"
import { useState, useEffect } from "react"
const CreateSubway = () => {

const [formState, setFormState]= useState({line:'', description:'', logo:''})
return (
  <div className="CreateUserForm">
    <h3>Add Another Line here:</h3>
    <form className="form">
      <label htmlFor="line">Line:</label>
      <input id='line'></input>
      <label htmlFor="description">Description:</label>
      <input id='description'></input>
      <label htmlFor="logo">Logo Image Url:</label>
      <input id='logo'></input>
      <button type='submit'>Add Line</button>
    </form>
  </div>
)

}
export default CreateSubway