

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import List from '../Pages/List'
import Project from '../Pages/Project'
import Task from '../Pages/Task'


function AllRoutes() {
  return (
    <div>
        <Home/>
        <Routes>
            {/* <Route path="/" element={<Home/>}/> */}
            <Route path="/list" element={<List/>} />
            <Route path="/project" element={<Project/>} />
            <Route path="/task" element={<Task/>} />


        </Routes>
    </div>
  )
}

export default AllRoutes