'use client'

import { createTask, updateTask } from "@/services"
import { useRouter } from "next/navigation"
import React from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"

function FormTask({ isPerEdit = false, taskEdit }) {
  const {push} = useRouter()
  const { register, setValue, formState: { errors }, handleSubmit } = useForm()
  const [isLoading, setIsLoading] = React.useState(false)
    
  React.useEffect(() => {
    if(!isPerEdit) return
    setValue('title', taskEdit.title)
    setValue('description', taskEdit.description)
  }, [setValue, isPerEdit, taskEdit])

  const handleSubmitForm = handleSubmit(async (data) => {
    try {
      setIsLoading(true)
      const action = isPerEdit ? updateTask(taskEdit.id, data) : createTask(data)
      const res = await action
      setIsLoading(false)
      const { ok, message } = res

      if (!ok) {
        toast.error(message)
        return
      }
      toast.success(message)
      fetch('/revalidate?path=/&type=layout').then(_ => push('/')) // this request is for revalidate (revalidate/route.js)
    } catch (error) {
      setIsLoading(false)
      console.error(error)
    }
  })

  const buttonText = {
    create: isLoading ? 'Creating...' : 'Create',
    edit: isLoading ? 'Updating...' : 'Update'
  }

  return (
    <form onSubmit={handleSubmitForm} className="w-[min(100%,500px)] bg-default my-5 p-8 rounded-md shadow-lg">
      <h2 className="text-lg mb-2 font-medium">{ !isPerEdit ? 'Create new' : 'Update'}task</h2>
      <div className="flex flex-col gap-2">
        <label className="flex flex-col gap-1 border rounded-md border-zinc-500 p-2">
          <small className="text-warning">Title</small>
          <input
            className="bg-transparent w-full outline-none" type="text"
            placeholder="Write the title"
            {...register('title', {required: 'Title is required'})}
          />
        </label>
        {errors.title && <small className="text-danger -mt-1">{errors.title.message}</small>}
        <label className="flex flex-col gap-1 border rounded-md border-zinc-500 p-2">
          <small className="text-warning">Description</small>
          <textarea
            className="bg-transparent w-full outline-none"
            placeholder="Write the description"
            {...register('description', {required: 'Description is required'})}
          />
        </label>
        {errors.description && <small className="text-danger -mt-1">{errors.description.message}</small>}
      </div>
      <button className="bg-primary hover:bg-primary/90 mt-5 py-2 px-4 text-white rounded" type="submit">{ isPerEdit ? buttonText.edit : buttonText.create}</button>
    </form>
  )
}
export default FormTask