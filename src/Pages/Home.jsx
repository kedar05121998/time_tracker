
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div style={{"display":"flex","justifyContent":"space-around" }}  >
    <button> <Link to="/" > Home </Link> </button>
    <button> <Link to="/project" > Add Project </Link> </button>
    <button> <Link to="/task" > Add Task </Link> </button>
    <button> <Link to="/list" > Task List </Link> </button>

    </div>
  )
}

export default Home