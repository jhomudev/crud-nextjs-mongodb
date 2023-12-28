import MyIcon, { ICONS } from "@/components/MyIcon"
import FormTask from "@/features/FormTask"
import { getTaskById } from "@/services"
import Link from "next/link"

export const dynamic = 'force-dynamic'

async function EditTaskPage({params}) {
  const {id} = params
  const task = await getTaskById(id)

  return (
    <div className="container mx-auto flex flex-col justify-center items-center">
      <Link className="text-zinc-200 mb-2 self-start" href='/'> <MyIcon icon={ICONS.arrowLeft}></MyIcon> Back</Link>
      <br />
      {
        task
          ? <FormTask isPerEdit taskEdit={task} />
          : <p>Task not found</p>
        }
    </div>
  )
}
export default EditTaskPage