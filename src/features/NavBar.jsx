import Link from "next/link"
import MyIcon, { ICONS } from "../components/MyIcon"
// import { TASK_STATE } from "@/contants"

function NavBar() {
  return (
    <nav className="flex justify-between items-center w-full mb-5">
      {/* <div className="flex gap-3 items-center">
        {
          Object.values(TASK_STATE).map((state, i) => (
            <button
              key={i}
              className="bg-default hover:bg-default/90 text-white text-sm py-2 px-4 rounded-full"
            >{state}</button>
          ))
        }
      </div> */}
      <Link href="/create" className="flex ml-auto gap-1 items-center bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded">
        <MyIcon icon={ICONS.plus} /> Create Task
      </Link>
    </nav>
  )
}
export default NavBar