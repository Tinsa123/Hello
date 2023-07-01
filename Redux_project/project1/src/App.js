import logo from "./logo.svg";
import "./App.css";
import Task from "./Components/Task";
import { useState } from "react";


function App() {
  const[task,setTask]=useState("")
  const[doList,setDoList]=useState([])
  const handleSubmit=()=>{

    setDoList((prev)=>{
      prev.push(task)
    })
    setTask("")

  }
  return (
    <div className="container my-3">
      <form>
        <div className="mb-3 ">
          <label htmlFor="adding task" className="form-label">
            Add Task
          </label>
          <input
            type="text"
            className="form-control"
            value={task}
            id="adding task"
            aria-describedby="emailHelp"
            onChange={(e)=>{
              setTask(e.target.value)
            }}
          />
        </div>
        <button className="btn btn-primary" onClick={()=>{
          handleSubmit()
        }}>
          Submit
        </button>
      </form>

      <Task doList={doList}/> 
   
    </div>
  );
}

export default App;
