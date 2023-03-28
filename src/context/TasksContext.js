"use client"
import { createContext, useContext} from "react";
import { v4 as uuid} from "uuid"
import {useLocalStorage} from "../hooks/useLoacalStorage"

export const TaskContext = createContext();
export const useTasks = () =>{
    const context = useContext(TaskContext);
    if(!context) 
        throw new Error("use tasks must be used with a provider");
    return context;
}



export const TaskProvider = ({children}) =>{

const  [tasks, setTasks]= useLocalStorage("tasks", [])


const createTask = (title, description) =>{
    setTasks([...tasks, {id: uuid(),title, description}])
}

const deleteTask = (id)=>{
    setTasks([...tasks.filter(task => task.id != id)])
}
const updateTask = (id, newTask) =>{
    setTasks([...tasks.map((task) =>{
        return task.id === id ? {...task, ...newTask} : task;
    })])
}
    
    return <TaskContext.Provider value = {{
        tasks,
        createTask: createTask,
        deleteTask,
        updateTask
    }}>
        {children}
    </TaskContext.Provider>;
}


