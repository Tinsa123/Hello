import logo from "./logo.svg";
import "./App.css";
import Task from "./Components/Task";
import { useState } from "react";
import AddTask from "./Components/AddTask";


function App() {
  const[task,setTask]=useState("")
  const[doList,setDoList]=useState(["gg","hh"])

  return (
    <div className="container my-3">
      <AddTask setTask={setTask} task={task} setDoList={setDoList} doList={doList}/>

      <Task doList={doList}/> 
   
    </div>
  );
}

export default App;
