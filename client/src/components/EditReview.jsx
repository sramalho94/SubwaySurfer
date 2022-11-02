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
        let response = await axios.get(`/api/reviews/${id}`)
        setFormState(response.data.review)
      } catch(error){
        console.log(error)
      }
    }
    getReviewId()
  }, [])
  const handleSubmit = async(e) =>{
    e.preventDefault();
    await axios.put(`/api/reviews/${id}`,formState)
    navigate('/')
  }


  return(
    <div className="CreateUserForm">
      <marquee>
        <img className='Train-car'src='https://cdn.pixabay.com/photo/2017/11/13/08/08/silver-2944881_960_720.png'></img>
      </marquee>
      <h1>Edit Review Below</h1>
      {formState && 
      (<form onSubmit={handleSubmit} className="form">
        <label htmlFor='review'>Review:</label>
        <input id='review' defaultValue={formState.review} onChange={handleChange}/>
        <label htmlFor='rating'>Rating:</label>
        <input id='rating' defaultValue={formState.rating} onChange={handleChange}/>
        <button type='submit' className='button'>Submit Revision</button>
      </form >)
      }
    </div>
  )
}



export default EditReview