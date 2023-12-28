'use client'
import Link from "next/link"
import MyIcon, { ICONS } from "../components/MyIcon"
import toast from "react-hot-toast"
import { deleteTask } from "@/services"
import { useRouter } from "next/navigation"

function TaskCard({ task }) {
  const { refresh } = useRouter()
  const handleDelete = async () => {
    if(!confirm('Are you sure to delete this task?')) return
    const { ok, message } = await deleteTask(task.id)
    if (!ok) {
      toast.error(message)
      return
    }
    toast.success(message)
    refresh()
  }
  return (
    <li className="w-full flex bg-default shadow-sm rounded-sm p-5">
      <article className="flex-1 flex gap-2 flex-col">
        <div className="flex flex-col">
          <h3 className="w-full text-warning">{task.title}</h3>
          <p className="flex-1 line-clamp-3 text-sm">{task.description}</p>
        </div>
        <div className="self-end mt-auto flex gap-2 items-center">
          <Link title="Edit" href={`/${task.id}/edit`} 
            className="bg-secondary hover:bg-secondary/90 text-white font-bold py-1 px-2 rounded"
          >
            <MyIcon icon={ICONS.pencil} />
          </Link>
          <button onClick={handleDelete} title="Delete" className="bg-danger hover:bg-danger/90 text-white font-bold py-1 px-2 rounded">
            <MyIcon icon={ICONS.trash} />
          </button>
        </div>
      </article>
    </li>
  )
}
export default TaskCard