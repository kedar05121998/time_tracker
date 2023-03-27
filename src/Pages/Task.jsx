import { useEffect, useState } from "react";

// Tasks component
 const Task = () => {
     const projectList=JSON.parse(localStorage.getItem("projectList"))
    const [project, setProject] = useState("");
    const [projectData, setProjectData] = useState(projectList);

    const [taskName, setTaskName] = useState('');
    const [timeSpent, setTimeSpent] = useState('');
    const [description, setDescription] = useState('');
    const [tasks, setTasks] = useState([]);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const task = {
        project,
        taskName,
        timeSpent,
        description,
        date: new Date().toDateString(),
      };
      setTasks([...tasks, task]);
      setProject('');
      setTaskName('');
      setTimeSpent('');
      setDescription('');
    };
  
    const handleProjectChange = (event) => {
      setProject(event.target.value);
    };

    useEffect(()=>{
        localStorage.setItem("taskList",JSON.stringify(tasks))
        console.log("data")
      },[tasks])


  

    return (
      <div>
        <h2>Tasks</h2>
        <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"row",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}} >
          <label htmlFor="project">Select Project:</label>
          <select id="project" value={project} onChange={handleProjectChange}>
            <option value="">Select Project</option>
            {projectData?.map((item, index) => (
              <option key={item+index} value={item}>
                {item}
              </option>
            ))}
          </select>
          <label htmlFor="taskName">Task Name:</label>
          <input
            type="text"
            id="taskName"
            value={taskName}
            onChange={(event ) => setTaskName(event.target.value)}
            />
            <label htmlFor="timeSpent">Time Spent:</label>
            <input
              type="number"
              id="timeSpent"
              value={timeSpent}
              onChange={(event) => setTimeSpent(event.target.value)}
            />
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
            <button type="submit">Add Task</button>
          </form>
          <ul style={{display:"flex",flexDirection:"coloum"}} >
            {tasks.map((task, index) => (
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
        </div>
        );
        };


        export default Task;
  