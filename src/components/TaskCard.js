import {useRouter} from "next/navigation";
import { useTasks } from "@/context/TasksContext";
import { toast } from "react-hot-toast";
export const TaskCard = ({task}) =>{
    console.log(task)
    const router = useRouter();
    const {deleteTask} = useTasks();
    
    return <div className="bg-gray-700 hover:bg-gray-600 cursor-pointer px-20 py-5 m-2"  key={task.id} onClick = {()=>{
        router.push(`edit/${task.id}`);
    }}>
        <div className="flex justify-between">
                <h1>{task.title}</h1>
                <button className="bg-red-700 hover:bg-red-600 px-3 py-1 inline-flex items-center rounded-md " onClick={(e)=>{
                e.stopPropagation();
                const acept = window.confirm("Estas seguro de querer eliminar");
                if (acept){
                    deleteTask(task.id);
                    toast.success("Tarea eliminada!")
                }

        }}>
            Delete
        </button >
    </div>
        
        <p className="text-gray-300">{task.description}</p>
        <sapan className="text-gray-400 text-xs">{task.id}</sapan>
        
  </div>;
}