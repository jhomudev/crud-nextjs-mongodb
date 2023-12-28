import Task from "@/models/Task"
import { NextResponse } from "next/server"

export const GET = async (_, {params}) => {
  try {
    const {id} = params
    const task = await Task.findById(id)

    if(task){
      return NextResponse.json({
        ok: true,
        message: `Task obtained`,
        data: task
      })
    }
    
    return NextResponse.json({
      ok: true,
      message: `Dont found task ${id}`
    }, {status: 404})
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

export const PUT = async (request, {params}) => {
  try {
    const {title, description} = await request.json()
    const {id} = params
    const taskUpdated = await Task.findByIdAndUpdate(id, {title, description},{
      new: true // devuelve el objeto actualizado, sino se pone devuelve el viejo
    })

    if(taskUpdated){
      return NextResponse.json({
        ok: true,
        message: `Task updated`,
        data: taskUpdated
      })
    }
  } catch (error) {
    return NextResponse.json({
      ok: false,
      message: `Some error`,
      error: error.message
    })
  }
}

export const DELETE = async (_, {params}) => {
  try {
    const {id} = params
    const taskDeleted = await Task.findByIdAndDelete(id)

    if(!taskDeleted){
      return NextResponse.json({
        ok: true,
        message: `Task not found`
      }, {status: 404})
    }

    if(taskDeleted){
      return NextResponse.json({
        ok: true,
        message: `Task deleted`,
        data: taskDeleted
      })
    }
  } catch (error) {
    return NextResponse.json({
      ok: false,
      message: `Some error`,
      error: error.message
    })
  }
}