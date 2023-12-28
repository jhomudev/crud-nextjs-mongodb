const createTask = async (data) => { 
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    const { ok, message } = await res.json()
    if (!ok) console.error(message)
    
    return { ok, message }
    
  } catch (error) {
    console.error(error)
  }
}

export default createTask