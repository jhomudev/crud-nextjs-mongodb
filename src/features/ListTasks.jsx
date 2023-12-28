import { getTasks } from "@/services"
import TaskCard from "./TaskCard"

async function ListTasks() {
  const tasks = await getTasks()
  const hasTasks = tasks.length > 0

  return !hasTasks
            ? <p className="text-center">No hay tareas</p>
            : <ul className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                  tasks.map((task, i)=>(
                    <TaskCard key={i} task={task}></TaskCard>
                  ))
                }
              </ul>
}
export default ListTasks