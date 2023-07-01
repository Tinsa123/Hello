import React from 'react'

export default function AddTask({setTask,task,doList,setDoList}) {
    const handleSubmit=(e)=>{
        e.preventDefault()
        let list1=[...doList,task]
        setDoList(list1)
        setTask("")
    
      }
  return (
    <div>
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
        <button className="btn btn-primary" onClick={(e)=>{
          handleSubmit(e)
        }}>
          Submit
        </button>
      </form>
      
    </div>
  )
}
