import React from 'react'
import { useLocation,useNavigate } from 'react-router'

function Home(){
  const location = useLocation();
  
  return (

    <div>

      <h1>Hello {location.state.id} Welcome to </h1>

    </div>
  )
}

export default Home