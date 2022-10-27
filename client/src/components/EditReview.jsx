import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'


const EditReview = (props) =>{
const navigate=useNavigate()
const {id} = useParams()
const [formState, setFormState]=useState( null )

const handleChange = (event)=>{
  setFormState({...formState, [event.target.id]: event.target.value})
}
  useEffect(() => {
    const getReviewId = async() => {
      try{
        let response = await axios.get(`http://localhost:3001/reviews/${id}`)
        setFormState(response.data.review)
      } catch(error){
        console.log(error)
      }
    }
    getReviewId()
  }, [])
  const handleSubmit = async(e) =>{
    e.preventDefault();
    await axios.put(`http://localhost:3001/reviews/${id}`,formState)
    navigate('/')
  }


  return(
    <div className="EditReviewForm">
      <h1>Edit Review Below</h1>
      {formState && 
      (<form onSubmit={handleSubmit}>
        <label htmlFor='review'>Review:</label>
        <input id='review' defaultValue={formState.review} onChange={handleChange}/>
        <label htmlFor='rating'>Rating:</label>
        <input id='rating' defaultValue={formState.rating} onChange={handleChange}/>
        <button type='submit' >Submit Revision</button>
      </form >)
      }
    </div>
  )
}



export default EditReview