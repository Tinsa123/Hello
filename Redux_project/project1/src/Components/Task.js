import React from 'react'

function Task({doList}) {
  return (
    <div style={{margin:"3rem 0"}}>
        <h1>Task</h1>
      <ul>
      <li>hooool</li>
        {
            doList.map((i,index)=>{
                return <li key={index}>{i}</li>
            })

        }
       </ul> 
    </div>
  )
}
export default Task