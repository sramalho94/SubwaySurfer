import axios from 'axios'
import { BASE_URL } from '../globals'
import { useState, useEffect } from 'react'
const SubwayLines = () => {
  const [subways, updateSubways] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get(`${BASE_URL}/api/subways`)
      updateSubways(response.data.subways)
    }
    apiCall()
  }, [])

  return (
    <div className="bg-gray-200 min-h-screen ">
      <h1 className="text-xl px-2 font-bold py-2">All Subway lines here:</h1>
      <div className="flex flex-col md:grid md:grid-cols-3">
        {subways.map((subway) => (
          <div
            key={subway._id}
            className="bg-white m-4 p-2 border-b-4 border-blue-500 shadow-xl hover:bg-[#0f61a9] text-[#0f61a9] hover:text-white font-bold text-lg"
          >
            <img src={subway.logo} className="h-20" alt={subway._id}></img>
            <h3>{subway.description}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SubwayLines
