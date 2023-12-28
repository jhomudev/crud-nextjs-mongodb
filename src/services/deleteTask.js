const deleteTask = async (taskId) => { 
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks/${taskId}`, {
      method: 'DELETE',
    })
    const { ok, message } = await res.json()
    if (!ok) console.error(message)
    
    return { ok, message }
    
  } catch (error) {
    console.error(error)
  }
}

export default deleteTask