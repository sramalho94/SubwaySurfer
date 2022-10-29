import axios from "axios";
import { useState, useEffect } from "react";
const SubwayLines = () =>{
  const [subways, updateSubways] = useState([])
  
  useEffect(()=> {
    const apiCall = async () => {
    let response = await axios.get('http://localhost:3001/subways')
    console.log(response.data.subways)
    updateSubways(response.data.subways)
    }
    apiCall()
    console.log(subways)
  },[])

  return(
    <div>
      <h1 className="title">All Subway lines here:</h1>
    <div className="Reviews">
      {subways.map((subway)=>(
        <div key={subway._id} className='review'>
          <img src={subway.logo} className='logo'></img>
          <h3>{subway.description}</h3>

        </div>
      )

      )}
    </div>
    </div>
  )
}

export default SubwayLines

