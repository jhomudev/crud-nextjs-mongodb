import MyIcon, { ICONS } from "@/components/MyIcon"
import FormTask from "@/features/FormTask"
import Link from "next/link"

function CreateTaskPage() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center">
      <Link className="text-zinc-200 mb-2 self-start" href='/'> <MyIcon icon={ICONS.arrowLeft}></MyIcon> Back</Link>
      <br />
      <FormTask />
    </div>
  )
}
export default CreateTaskPage