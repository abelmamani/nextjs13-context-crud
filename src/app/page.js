"use client"
import {useTasks} from "../context/TasksContext"
import { TaskCard } from "../components/TaskCard";
function Page() {
  const {tasks} = useTasks();
  
  return (<div className="w-7/12 ">
    {tasks.map(task =>  (
      
      <TaskCard key = {task.id} task = {task}></TaskCard>
    ))}
  </div>)
}

export default Page
