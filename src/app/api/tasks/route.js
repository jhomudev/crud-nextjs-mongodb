import Task from "@/models/Task"
import { connectDB } from "@/utils/mongoose"

const { NextResponse } = require("next/server")

export const GET = async () => {
  try {
    connectDB()
    const tasks = await Task.find()

    return NextResponse.json({
      ok: true,
      message: 'Tasks obtained',
      data: tasks
    })
  } catch (error) {
    return NextResponse.json({
      ok: false,
      message: 'Some error',
      error: error.message
    }, {status: 500})
  }
}

export const POST = async (request) => {
  try {
    const {title, description} = await request.json()
    const newTask = new Task({title, description})
    const savedtask = await newTask.save()
    
    return NextResponse.json({
      ok: true,
      message: 'Task created',
      data: savedtask
    })
  } catch (error) {
    return NextResponse.json({
      ok: false,
      message: 'Some error',
      error: error.message
    }, {
      status: 400
    })
  }
}