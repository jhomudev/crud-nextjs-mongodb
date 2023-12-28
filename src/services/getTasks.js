import { API_URL } from "@/contants"

const getTasks = async () => { 
  try {
    const res = await fetch(`${API_URL}/tasks`)
    const {data: tasks, ok, message} = await res.json()

    if(!ok) console.error(message)
    const tasksFormated = tasks.map(task=> ({
      id: task._id,
      title: task.title,
      description: task.description,
      createdAt: task.createdAt,
      updatedAt: task.updatedAt
    }))
  
    return tasksFormated
  } catch (error) {
    console.error(error)
  }
}

export default getTasks