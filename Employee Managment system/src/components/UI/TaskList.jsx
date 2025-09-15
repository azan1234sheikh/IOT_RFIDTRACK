import React from 'react'
import './../../index.css'
import AcceptTask from './AcceptTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'
import NewTask from './NewTask'
const TaskList = ({ Propdata }) => {

  //  console.log(Propdata);
  return (
<>
<div id="tasklist" className="w-[100%] h-auto overflow-x-auto flex items-center rounded-xl justify-start gap-4 py-8  mt-10 lg:flex-row flex-col" >
      {Propdata.task.map((elem , index)=>{
        if(elem.active){
          return <AcceptTask Propdata={elem} key={index}/>
        }
        if(elem.newTask){
          return <NewTask Propdata={elem} key= {index}/>
        } 
        if(elem.failed){
          return <FailedTask Propdata={elem} key= {index}/>
        }   
      })}
    </div>
</>
  

  )
}

export default TaskList