import React, { useState } from 'react'

function List() {
    const finalList=JSON.parse(localStorage.getItem("taskList"))
  
    const [Data,setData] = useState(finalList);

    const projectDates = [...new Set(Data.map((task) => task.project))];
  return (
    <div style={{display:"flex",flexDirection:"coloum"}} >
           <ul>
            {finalList.map((task, index) => (
              <li key={index} style={{display:"flex",flexDirection:"row",gap:"25px",border:"1px solid red"}} >
                <p>
                  <strong>Project: </strong>
                  {task.project}
                </p>
                <p>
                  <strong>Task Name: </strong>
                  {task.taskName}
                </p>
                <p>
                  <strong>Time Spent: </strong>
                  {task.timeSpent} hours
                </p>
                <p>
                  <strong>Description: </strong>
                  {task.description}
                </p>
                <p>
                  <strong>Date: </strong>
                  {task.date}
                </p>
              </li>
            ))}
          </ul>
          <div>
          {projectDates.map((project) => (
        <TotalHours key={project} tasks={Data} project={project} />
      ))}
          </div>
    </div>
  
  )

}

const TotalHours = ({ tasks, project }) => {
    const totalHours = tasks
      .filter((task) => task.project === project)
      .reduce((acc, curr) => acc + parseFloat(curr.timeSpent), 0);
  
    return <p>Total hours for {project}: {totalHours}</p>;
  };

export default List