import React, { useEffect, useState } from 'react';

// Projects component
 const Project = () => {
  const [projectName, setProjectName] = useState('');
  const [projects, setProjects] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setProjects([...projects, projectName]);
    //localStorage.setItem("projectList",JSON.stringify(projects))

    setProjectName('');
  };

  useEffect(()=>{
    localStorage.setItem("projectList",JSON.stringify(projects))
    console.log("data")
  },[projects])

  return (
    <div>
      <h2>Projects</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="projectName">Project Name:</label>
        <input
          type="text"
          id="projectName"
          value={projectName}
          onChange={(event) => setProjectName(event.target.value)}
        />
        <button type="submit">Add Project</button>
      </form>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </div>
  );
};

export default Project

