const { API_URL } = require("@/contants")

const getTaskById = async (taskId) => { 
  try {
    const res = await fetch(`${API_URL}/tasks/${taskId}`)

    const {data: task, ok, message} = await res.json()

    if(!ok) console.error(error)
    const taskFormated = {
      id: task._id,
      title: task.title,
      description: task.description,
      createdAt: task.createdAt,
      updatedAt: task.updatedAt
    }
  
    return taskFormated
  } catch (error) {
    console.error(error)
  }
}

export default getTaskById