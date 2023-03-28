"use client"
import {useRouter} from "next/navigation"
import Link from "next/link"
import { useTasks } from "@/context/TasksContext"

export function Navbar() {
  const {tasks} = useTasks();
  const router = useRouter()
    return (
      
    <header className="flex items-center justify-between bg-gray-800 px-28 py-10">
        <Link  href={"/"}>
        <h1 className="font-bold text-3xl text-white">Task App <span className="text-sm ml-5 text-slate-300">{tasks.length}</span></h1>
        </Link>
        <div>
            <button className="bg-green-500 hover:bg-green-400 text-gray-50 font-bold rounded-sm inline-flex items-center px-5 py-2" onClick={() =>{
              router.push("/new")
            }}>Add Task</button>
        </div>
    </header>
  )
}
