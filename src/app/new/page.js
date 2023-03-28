"use client"
import {useEffect}from 'react'
import {useTasks} from "../../context/TasksContext"
import { useRouter } from 'next/navigation';
import {useForm} from "react-hook-form"
import {toast} from "react-hot-toast"

function Page({params}) {
  
  const router = useRouter();
  const {tasks, createTask, updateTask} = useTasks();
  
  const {register, handleSubmit, setValue,formState: {
    errors
  }} = useForm();

  const onSumbit = handleSubmit((data)=>{
    if(params.id){
      updateTask(params.id, data)
      toast.success("Tarea actaulizada!")
    }else{ 
      createTask(data.title, data.description)
      toast.success("Tarea creada!")
    }
    router.push("/");
  })

useEffect(() =>{
  if(params.id){
    const taskFound = tasks.find(task => task.id === params.id)
    if(taskFound){
      setValue("title", taskFound.title)
      setValue("description", taskFound.description)
    }
  }
}, [])
  return (<div className='flex justify-center items-center h-full'>
      <form onSubmit={onSumbit} className = "bg-gray-700 p-10">
      <h2 className='text-center'>Nueva Tarea</h2>
      <input 
        className='bg-gray-800 py-3 px-4 mb-2 mt-5 block focus:ouline-none w-full'
        placeholder='Escribe un titulo'
        {...register("title", {required: true})} />

      {errors.title && (<span className='block text-red-400 mb-2 '>Este campo es requerido</span>)} 
      <textarea 
        className='bg-gray-800 py-3 px-4 mb-2 mt-5 block focus:ouline-none w-full'
        placeholder='Escribe una descripcion' 
        {...register("description", {required: true})}/>
        {errors.description && (<span className='block text-red-400 mb-2 ' >Este campo es requerido</span>)} 

      <button className='bg-green-500 hover:bg-green-400 px-4 py-2 rounded-sm disabled:opacity-30 w-full mt-10'>Gurdar</button>
    </form>
  </div>
  )
}

export default Page
