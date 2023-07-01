import React from 'react'

function Task({doList}) {
  return (
    <div style={{margin:"3rem 0"}}>
        <h1>Task</h1>
      <ul style={{listStyleType:"none" }}>
      
      <li style={{margin:"1rem 0"}}><button type="button" className="btn btn-success">"hhhhjkk"</button></li>
        {
            doList.map((i,index)=>{
                return <li key={index} style={{margin:"1rem 0",width:"50%",wordBreak:"break-word"}}>
                    <button type="button" className="btn btn-success" style={{width:"100%"}}>{i}</button>
                </li>
            })

        }
       </ul> 
    </div>
  )
}
export default Task